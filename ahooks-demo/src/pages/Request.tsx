import { useState } from "react";

import { useRequest } from "ahooks";

import { getUserId, getUsername, changeUsername, deleteUser, getTime } from "../api";

const Request = () => {
  const [editState, setEditState] = useState("");

  const { data, error, loading } = useRequest(getUsername);

  const { loading: changeLoading, run: changeUsernameRun } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (res) => {
      if (res.success) {
        setEditState("");
      }
    },
  });

  const {
    data: timeData,
    error: timeError,
    loading: timeLoading,
    run: timeRun,
    cancel: timeCancel,
  } = useRequest(getTime, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
  });

  const users = [
    { id: 1, name: "ahooks" },
    { id: 2, name: "react" },
    { id: 3, name: "vue" },
  ];

  const { run: deleteRun, fetches: deleteFetches } = useRequest(deleteUser, {
    manual: true,
    fetchKey: (id) => id,
    onSuccess(result, params) {
      if (result.success) {
        console.log("deleteUser success", params[0]);
      }
    },
  });

  const userIdRequest = useRequest(getUserId);

  const userNameRequest = useRequest(
    () => {
      return getUsername(userIdRequest.data);
    },
    {
      ready: !!userIdRequest.data,
    }
  );

  return (
    <div>
      <h2>useRequest</h2>
      <hr />
      <h3>Default</h3>
      <p>Username: {loading ? "Loading..." : error ? "Error!" : data}</p>
      <hr />
      <h3>Manual</h3>
      <p>
        Username:{" "}
        <input
          value={editState}
          onChange={(e) => {
            setEditState(e.target.value);
          }}
          placeholder="Enter new username"
        />
        <button disabled={changeLoading} onClick={() => changeUsernameRun(editState)}>
          {changeLoading ? "Loading..." : "Change"}
        </button>
      </p>
      <hr />
      <h3>Polling</h3>
      <p>
        Time: {timeLoading ? "Loading..." : timeError ? "Error!" : timeData}
        <button onClick={timeRun}>Start</button>
        <button onClick={timeCancel}>Stop</button>
      </p>
      <hr />
      <h3>fetchkey</h3>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button
                onClick={() => {
                  deleteRun(user.id);
                }}
              >
                {deleteFetches[user.id]?.loading ? "Loading..." : "Delete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <h3>ready</h3>
      <div>
        <p>
          UserId:{" "}
          {userIdRequest.loading
            ? "Loading..."
            : userIdRequest.error
            ? "Error!"
            : userIdRequest.data}
          UserName:{" "}
          {userNameRequest.loading
            ? "Loading..."
            : userNameRequest.error
            ? "Error!"
            : userNameRequest.data}
        </p>
      </div>
    </div>
  );
};

export default Request;
