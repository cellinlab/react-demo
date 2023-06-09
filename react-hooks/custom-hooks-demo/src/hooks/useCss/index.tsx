import { useEffect } from "react";
import {create, NanoRenderer} from "nano-css"
import { addon as addonCSSOM, CSSOMAddon } from "nano-css/addon/cssom";
import { addon as addonVCSSOM, VCSSOMAddon } from "nano-css/addon/vcssom";
import { cssToTree } from 'nano-css/addon/vcssom/cssToTree';

import {useCreation} from '../index';

type NoneType = NanoRenderer & CSSOMAddon & VCSSOMAddon;

type CSSKey = keyof React.CSSProperties;

type CSSProps =
  | React.CSSProperties
  | {
      [key: Exclude<string, CSSKey>]: CSSProps;
    };

const nano = create() as NoneType;

addonCSSOM(nano);
addonVCSSOM(nano);

let counter = 0;

const useCss = (css: CSSProps): string => {
  const className = useCreation(
    () => `cell-hooks-css-${(counter++).toString(36)}`,
    [],
  );

  const sheet = useCreation(
    () => new nano.VSheet(),
    [],
  );

  useEffect(() => {
    const tree = {};
    cssToTree(tree, css, `.${className}`, '');
    sheet.diff(tree);
    return () => {
      sheet.diff({});
    };
  }, []);

  return className;
};

export default useCss;
