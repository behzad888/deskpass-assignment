import React from 'react';
import {Tooltip} from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tooltip>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </Tooltip>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
