import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Alert } from './Alter';

function App() {
  return (
    <div className="App">
      <Alert heading="Success" closeable>
        Everything is really good!
      </Alert>
    </div>
  );
}

export default App;
