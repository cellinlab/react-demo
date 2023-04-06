import useAsync from "./useAsync"

const Demo = () => {
  const {
    data: users,
    error,
    loading,
    execute: fetchUsers,
  } = useAsync(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });

  return (
    <div>
      <h1>useAsync</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {users && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Demo;
