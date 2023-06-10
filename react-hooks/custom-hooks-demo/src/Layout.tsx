import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "25%",
          background: "#f0f0f0",
        }}
      >
        <h1>自定义 Hooks</h1>
        <hr />
        <h2>响应式的 useState</h2>
        <ul>
          <li>
            <Link to="/">useLatest</Link>
          </li>
          <li>
            <Link to="/useMount">useMount 和 useUnmount</Link>
          </li>
          <li>
            <Link to="/useUnmountedRef">useUnmountedRef</Link>
          </li>
          <li>
            <Link to="/useSafeState">useSafeState</Link>
          </li>
          <li>
            <Link to="/useUpdate">useUpdate</Link>
          </li>
          <li>
            <Link to="/useCreation">useCreation</Link>
          </li>
          <li>
            <Link to="/useReactive">useReactive</Link>
          </li>
        </ul>
        <hr />
        <h2>自定义 DOM Hooks</h2>
        <ul>
          <li>
            <Link to="/useHover">useHover</Link>
          </li>
          <li>
            <Link to="/useDocumentVisibility">useDocumentVisibility</Link>
          </li>
          <li>
            <Link to="/useInViewport">useInViewport</Link>
          </li>
          <li>
            <Link to="/useNetwork">useNetwork</Link>
          </li>
        </ul>
        <hr />
        <h2>自定义业务 Hooks</h2>
        <ul>
          <li>
            <Link to="/useSelections">useSelections</Link>
          </li>
          <li>
            <Link to="/useCountDown">useCountDown</Link>
          </li>
          <li>
            <Link to="/useCss">useCss</Link>
          </li>
        </ul>
        <hr />
        <h2>自定义通用 Hooks</h2>
        <ul>
          <li>
            <Link to="/useDebounceFn">useDebounceFn</Link>
          </li>
          <li>
            <Link to="/useDebounce">useDebounce</Link>
          </li>
          <li>
            <Link to="/useThrottleFn">useThrottleFn</Link>
          </li>
          <li>
            <Link to="/useThrottle">useThrottle</Link>
          </li>
          <li>
            <Link to="/useLockFn">useLockFn</Link>
          </li>
          <li>
            <Link to="/useFullscreen">useFullscreen</Link>
          </li>
          <li>
            <Link to="/useCopy">useCopy</Link>
          </li>
          <li>
            <Link to="/useTextSelection">useTextSelection</Link>
          </li>
          <li>
            <Link to="/useResponsive">useResponsive</Link>
          </li>
          <li>
            <Link to="/useTrackedEffect">useTrackedEffect</Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
