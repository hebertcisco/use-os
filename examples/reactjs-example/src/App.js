import React from 'react';
import { useOs } from 'use-os';

import logo from './logo.svg';
import './App.css';

function App() {
  const current_os = useOs();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You are using{' '}
          <a className="App-link" href={`#${current_os}`} target="_blank" rel="noopener noreferrer">
            {current_os}
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
