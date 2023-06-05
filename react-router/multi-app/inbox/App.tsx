import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Inbox from "./Inbox";
import Message from "./Message";
import NoMatch from "./NoMatch";

const App = () => {
  return (
    <Routes>
      {/* Routes in this app don't need to worry about which URL prefix they are
          mounted at. They can just assume they are mounted at /. Then, if they
          are moved under a different basename later on, all routes and links will
          continue to work. */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Inbox />} />
        <Route path=":id" element={<Message />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
