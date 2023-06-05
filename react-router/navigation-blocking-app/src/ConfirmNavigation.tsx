import type { unstable_Blocker as Blocker } from "react-router-dom";

const ConfirmNavigation = ({ blocker }: { blocker: Blocker }) => {
  if (blocker.state === "blocked") {
    return (
      <>
        <p style={{ color: "red" }}>Blocked the last navigation to {blocker.location.pathname}</p>
        <button onClick={() => blocker.proceed?.()}>Let me through</button>
        <button onClick={() => blocker.reset?.()}>Keep me here</button>
      </>
    );
  }

  if (blocker.state === "proceeding") {
    return <p style={{ color: "orange" }}>Proceeding through blocked navigation</p>;
  }

  return <p style={{ color: "green" }}>Blocker is currently unblocked</p>;
};

export default ConfirmNavigation;
