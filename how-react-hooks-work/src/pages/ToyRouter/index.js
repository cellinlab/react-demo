import React, { useState, useEffect } from 'react';

const ToyRouter = ({ children }) => {
  const routes = children.map((child) => {
    return {
      path: child.props.path,
      element: child.props.element,
    };
  });

  const [hash, setHash] = useState(window.location.hash.slice(1));

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash.slice(1));
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  const route = routes.find((route) => route.path === hash);

  return route ? route.element : null;
};

const ToyRoute = ({ path, element }) => {
  return null;
};

const DemoPage = () => {
  return (
    <div>
      <div className="header-nav">
        <a href="#demo1">Demo</a>
        <a href="#demo2">Demo</a>
      </div>
      <ToyRouter>
        <ToyRoute path="demo1" element={<div>Demo 1</div>} />
        <ToyRoute path="demo2" element={<div>Demo 2</div>} />
      </ToyRouter>
    </div>
  );
};

const Demo = () => {
  return (
    <div>
      <h1>Toy Router</h1>
      <hr />
      <DemoPage />
    </div>
  );
};

export default Demo;
