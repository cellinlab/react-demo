import { Link } from "react-router-dom";

import { messages } from "./messages";

const Inbox = () => {
  return (
    <div>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {messages.map((message) => (
          <Link
            to={message.id}
            key={message.id}
            style={{
              display: "flex",
              borderBottom: "1px solid #ccc",
              padding: "10px",
              width: "100%",
              textDecoration: "none",
              color: "#000",
            }}
          >
            <span
              style={{
                flexBasis: 100,
                marginRight: "1rem",
              }}
            >
              {message.from.name}
            </span>
            <div
              style={{
                flexGrow: 1,
                textOverflow: "ellipsis",
                width: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                marginRight: "1rem",
              }}
            >
              <span>{message.subject}</span>
              <div style={{ color: "#999", display: "inline" }}>
                <span>{" — "}</span>
                <span>{message.body}</span>
              </div>
            </div>
            <span style={{ flexShrink: 0 }}>{new Date(message.date).toDateString()}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
