import React, { createContext, useContext, useState } from "react";

const ThemeContext: any = createContext(null);

const Child = () => {
  const { theme, setTheme } = useContext(ThemeContext) as any;

  return (
    <div
      style={{
        border: `1px solid ${theme === "light" ? "blue" : "red"}`,
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
      }}
    >
      <h2>Child</h2>
      <div>theme from parent: {theme}</div>
      <div>
        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          change theme
        </button>
      </div>
    </div>
  );
};

const Parent = () => {
  const [themeContextValue, setThemeContextValue] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme: themeContextValue,
        setTheme: setThemeContextValue,
      }}
    >
      <div>
        <h2>Parent</h2>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
};

const ContextDemo = () => {
  return (
    <div>
      <h2>ContextDemo</h2>
      <Parent />
    </div>
  );
};

export default ContextDemo;
