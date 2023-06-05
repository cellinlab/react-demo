import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function randomUser() {
  let users = ["chaance", "jacob-ebey", "mcansh", "mjackson", "ryanflorence"];
  return users[Math.floor(Math.random() * users.length)];
}

const Home = () => {
  const [userData, setUserData] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const user = searchParams.get("user");

  useEffect(() => {
    const abortController = new AbortController();

    async function getGithubUser() {
      const res = await fetch(`https://api.github.com/users/${user}`, {
        signal: abortController.signal,
      });

      if (!abortController.signal.aborted) {
        const data = await res.json();
        setUserData(data);
      }
    }
    if (user) {
      getGithubUser();
    }

    return () => {
      abortController.abort();
    };
  }, [user]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let newUser = formData.get("user") as string;
    if (!newUser) return;
    setSearchParams({ user: newUser });
  }

  function handleRandomSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let newUser = randomUser();
    // our new random user is the same as our current one, let's try again
    if (newUser === user) {
      handleRandomSubmit(event);
    } else {
      setSearchParams({ user: newUser });
    }
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <form onSubmit={handleSubmit}>
          <label>
            <input defaultValue={user ?? undefined} type="text" name="user" />
          </label>
          <button type="submit">Search</button>
        </form>
        <form onSubmit={handleRandomSubmit}>
          <input type="hidden" name="random" />
          <button type="submit">Random</button>
        </form>
      </div>

      {userData && (
        <div
          style={{
            padding: "24px",
            margin: "24px 0",
            borderTop: "1px solid #eaeaea",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            width={200}
            height={200}
            src={userData.avatar_url}
            alt={userData.login}
          />
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
