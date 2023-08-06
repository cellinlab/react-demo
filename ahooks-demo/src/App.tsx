import { Link } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";

import Toggle from "./pages/Toggle";
import Request from "./pages/Request";

function App() {
  return (
    <div>
      <h1>ahooks Demo</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: 200,
            height: "100vh",
            borderRight: "1px solid #eee",
          }}
        >
          <ul>
            <li>
              <Link to="/toggle">useToggle</Link>
            </li>
            <li>
              <Link to="/request">useRequest</Link>
            </li>
          </ul>
        </div>
        <div
          style={{
            flex: 1,
            padding: 20,
          }}
        >
          <Switch>
            <Redirect exact from="/" to="/toggle" />
            <Route path="/toggle" component={Toggle} />
            <Route path="/request" component={Request} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
