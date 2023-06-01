import { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

import RenderAwaitedData from "./RenderAwaitedData";
import RenderAwaitedError from "./RenderAwaitedError";

interface DeferredRouteLoaderData {
  critical1: string;
  critical2: string;
  lazyResolved: Promise<string>;
  lazy1: Promise<string>;
  lazy2: Promise<string>;
  lazy3: Promise<string>;
  lazyError: Promise<string>;
}

const rand = () => {
  return Math.round(Math.random() * 100);
};

const resolve = (d: string, ms: number) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(`resolved ${d} ${rand()}`);
    }, ms);
  });
};

const reject = (d: Error | string, ms: number) => {
  return new Promise((_, r) => {
    setTimeout(() => {
      if (d instanceof Error) {
        d.message += `- ${rand()}`;
      } else {
        d += `- ${rand()}`;
      }
      r(d);
    }, ms);
  });
};

export async function deferredLoader() {
  return defer({
    critical1: await resolve("critical1", 250),
    critical2: await resolve("critical2", 500),
    lazyResolved: Promise.resolve("Lazy Data immediately resolved - " + rand()),
    lazy1: resolve("lazy1", 1000),
    lazy2: resolve("lazy2", 1500),
    lazy3: resolve("lazy3", 2000),
    lazyError: reject(new Error("Lazy Error"), 2500),
  });
}

const DeferredPage = () => {
  const data = useLoaderData() as DeferredRouteLoaderData;

  return (
    <div>
      {/* Critical data renders immediately */}
      <p>{data.critical1}</p>
      <p>{data.critical2}</p>

      {/* Pre-resolved deferred data never triggers the fallback */}
      <Suspense fallback={<p>should not see me</p>}>
        <Await resolve={data.lazyResolved}>
          <RenderAwaitedData />
        </Await>
      </Suspense>

      {/* Deferred data can be rendered using a component + the useAsyncValue() hook */}
      <Suspense fallback={<p>loading 1...</p>}>
        <Await resolve={data.lazy1}>
          <RenderAwaitedData />
        </Await>
      </Suspense>
      <Suspense fallback={<p>loading 2...</p>}>
        <Await resolve={data.lazy2}>
          <RenderAwaitedData />
        </Await>
      </Suspense>

      {/* Or you can bypass the hook and use a render function */}
      <Suspense fallback={<p>loading 3...</p>}>
        <Await resolve={data.lazy3}>{(data: string) => <p>{data}</p>}</Await>
      </Suspense>

      {/* Deferred rejections render using the useAsyncError hook */}
      <Suspense fallback={<p>loading error...</p>}>
        <Await resolve={data.lazyError} errorElement={<RenderAwaitedError />}>
          <RenderAwaitedData />
        </Await>
      </Suspense>
    </div>
  );
};

export default DeferredPage;
