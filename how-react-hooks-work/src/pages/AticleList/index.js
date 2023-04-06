import { useState, useCallback, useEffect, useMemo } from "react";
import useAsync from "../useAsync/useAsync";

const endpoint = "https://jsonplaceholder.typicode.com";

const useUsers = () => {
  const { data: users, error, loading, execute: fetchUsers } = useAsync(
    useCallback(async () => {
      const response = await fetch(`${endpoint}/users`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }, [])
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    usersLoading: loading,
    usersError: error,
  };
};

const useArticles = () => {
  const { data: articles, error, loading, execute: fetchArticles } = useAsync(
    useCallback(async () => {
      const response = await fetch(`${endpoint}/posts`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }, [])
  );

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return {
    articles,
    articlesLoading: loading,
    articlesError: error,
  };
};

const useArticlesWithUsers = (articles, users) => {
  return useMemo(() => {
    if (!articles || !users) {
      return null;
    }

    return articles.map((article) => {
      const user = users.find((user) => user.id === article.userId);
      return {
        ...article,
        user,
      };
    });
  }, [articles, users]);
};

const useFilteredArticles = (articles, selectedUserId) => {
  return useMemo(() => {
    if (!articles) {
      return null;
    }

    if (!selectedUserId) {
      return articles;
    }

    return articles.filter((article) => article.userId === selectedUserId);
  }, [articles, selectedUserId]);
};

const ArticleList = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const { users, usersLoading, usersError } = useUsers();
  const { articles, articlesLoading, articlesError } = useArticles();
  const articlesWithUsers = useArticlesWithUsers(articles, users);
  const filteredArticles = useFilteredArticles(articlesWithUsers, selectedUserId);

  if (usersLoading || articlesLoading) {
    return <h1>Loading...</h1>;
  }

  if (usersError || articlesError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>Article List</h1>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedUserId(Number(e.target.value));
        }}
      >
        <option value="">All</option>
        {users &&
          users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
      </select>
      <ul>
        {filteredArticles &&
          filteredArticles.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <p>By: {article.user.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArticleList;
