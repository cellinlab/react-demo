const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');

const app = express();

app.get('/', (req, res) => {
  const Page = React.createElement('div', null, 'hello world');
  const html = renderToString(Page);
  res.send(html);
});

app.listen(3000, () => {
  console.log('server is listening on 3000');
});
