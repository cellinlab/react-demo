import { Routes, Route, Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard Home</Link>
          </li>
          <li>
            <Link to="/dashboard/messages">Messages</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

const DashboardIndex = () => {
  return (
    <div>
      <h2>Dashboard Index</h2>
    </div>
  );
};

const DashboardMessages = () => {
  return (
    <div>
      <h3>Dashboard Messages</h3>
    </div>
  );
};

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardIndex />} />
        <Route path="messages" element={<DashboardMessages />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
