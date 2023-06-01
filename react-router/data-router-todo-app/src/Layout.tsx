import { useNavigation, useRevalidator, useFetchers, Link, Outlet } from "react-router-dom";

const Layout = () => {
  const navigation = useNavigation();
  const revalidator = useRevalidator();
  const fetchers = useFetchers();

  const fetcherInProgress = fetchers.some((fetcher) =>
    ["loading", "submitting"].includes(fetcher.state)
  );

  return (
    <>
      <h1>Data Router Todo App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/deferred">Deferred</Link>
          </li>
          <li>
            <Link to="/nothing">Nothing</Link>
          </li>
          <li>
            <button onClick={() => revalidator.revalidate()}>Revalidate Data</button>
          </li>
        </ul>
      </nav>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
        }}
      >
        {navigation.state !== "idle" && <p>Navigation in progress: {navigation.state} </p>}
        {revalidator.state !== "idle" && <p>Revalidation in progress: {revalidator.state} </p>}
        {fetcherInProgress && <p>Fetchers in progress...</p>}
      </div>
      <p>
        Click on over to <Link to="/todos">/todos</Link> and check out these data loading APIs!
      </p>
      <p>
        Or, checkout <Link to="/deferred">/deferred</Link> to see how to separate critical and
        lazily loaded data in your loaders.
      </p>
      <p>
        We've introduced some fake async-aspects of routing here, so Keep an eye on the top-right
        hand corner to see when we're actively navigating.
      </p>
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
