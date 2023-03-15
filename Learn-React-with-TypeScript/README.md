## Init

### CRA

```bash
npx create-react-app my-app --template typescript
```

### prettier

- install
  ```bash
  npm i -D prettier
  npm i -D eslint-config-prettier eslint-plugin-prettier
  ```
- `package.json`
  ```json
  "eslintConfig": {
    "extends": [
      "plugin:react/recommended",
    ]
  },
  ```
- `.prettierrc.json`
  ```json
  {
    "printWidth": 100,
    "singleQuote": true,
    "semi": true,
    "tabWidth": 2,
    "trailingComma": "all",
    "endOfLine": "auto"
  }
  ```
- `.vscode/settings.json`
  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  ```

### Tailwind

- install
  ```bash
  npm i -D tailwindcss@latest postcss@latest autoprefixer@latest
  ```
- Init
  ```bash
  npx tailwindcss init -p
  ```
- `tailwind.config.js`
  ```js
  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
- `index.css`
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
