import { useParams } from "react-router-dom";

import NoMatch from "./NoMatch";

import { getMessageById } from "./messages";

const Message = () => {
  const { id } = useParams();
  const message = getMessageById(`${id}`);

  if (!message) {
    return <NoMatch />;
  }

  return (
    <div>
      <h2>{message.subject}</h2>
      <div>
        <h3 style={{ fontSize: 14 }}>
          <span>{message.from.name}</span> <span>&lt;{message.from.email}&gt;</span>
        </h3>
        <div>{message.body}</div>
      </div>
    </div>
  );
};

export default Message;
