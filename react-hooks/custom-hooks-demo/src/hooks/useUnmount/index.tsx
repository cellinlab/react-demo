import { useEffect } from "react";
import { useLatest } from "../index";

const useUnMount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(() => {
    return () => {
      fnRef.current?.();
    };
  }, []);
};

export default useUnMount;
