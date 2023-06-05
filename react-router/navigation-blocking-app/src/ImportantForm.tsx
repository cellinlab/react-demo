import { useState, useEffect } from "react";
import { Form, unstable_useBlocker as useBlocker } from "react-router-dom";

import ConfirmNavigation from "./ConfirmNavigation";

const ImportantForm = () => {
  const [value, setValue] = useState("");
  const isBlocked = value !== "";
  const blocker = useBlocker(isBlocked);

  useEffect(() => {
    if (blocker.state === "blocked" && !isBlocked) {
      blocker.reset();
    }
  }, [blocker, isBlocked]);

  return (
    <>
      <p>
        Is the form dirty?{" "}
        {isBlocked ? (
          <span style={{ color: "red" }}>Yes</span>
        ) : (
          <span style={{ color: "green" }}>No</span>
        )}
      </p>

      <Form method="post">
        <label>
          Enter some important data:
          <input name="data" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        <button type="submit">Save</button>
      </Form>

      {blocker ? <ConfirmNavigation blocker={blocker} /> : null}
    </>
  );
};

export default ImportantForm;
