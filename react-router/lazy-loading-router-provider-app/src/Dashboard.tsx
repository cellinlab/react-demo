import { Outlet, Link, useLoaderData } from "react-router-dom";

export function DashboardLayout() {
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
}

export function DashboardIndex() {
  return (
    <div>
      <h1>Dashboard Index</h1>
    </div>
  );
}

interface MessageData {
  messages: string[];
}

export async function DashboardMessagesLoader() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    messages: ["Hello", "World"],
  } as MessageData;
}

export function DashboardMessages() {
  const { messages } = useLoaderData() as MessageData;

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
