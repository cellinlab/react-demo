import React from 'react';
function TestComponent() {
  return /*#__PURE__*/React.createElement("p", null, "hello, React");
}
function Index() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u6A21\u62DF babel \u5904\u7406 jsx \u6D41\u7A0B"), /*#__PURE__*/React.createElement(TestComponent, null));
}
export default Index;