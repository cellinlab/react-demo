import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return <div>Hello World!</div>;
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
