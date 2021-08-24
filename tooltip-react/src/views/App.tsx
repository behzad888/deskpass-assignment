import {Tooltip} from '../components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tooltip title="Hi">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </Tooltip>
        <Tooltip title="Learn ReactLearn ReactLearn React" place="right">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Tooltip>
      </header>
    </div>
  );
}

export default App;
