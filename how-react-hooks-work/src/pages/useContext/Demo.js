import React, { useContext, useState } from "react";

const ThemeContext = React.createContext("light");

const Button = () => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme === "light" ? "#eee" : "#222",
        color: theme === "light" ? "#222" : "#eee",
      }}
    >
      I am styled by theme context!
    </button>
  );
};

const Demo = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <h1>useContext</h1>
      <ThemeContext.Provider value={theme}>
        <Button />
      </ThemeContext.Provider>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Demo;
