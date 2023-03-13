const fs = require('fs');
const babel = require('@babel/core');

const code = fs.readFileSync('./element.jsx', 'utf-8');
const result = babel.transformSync(code, {
  plugins: [
    '@babel/plugin-transform-react-jsx'
  ]
});
fs.writeFileSync('./element.js', result.code);
