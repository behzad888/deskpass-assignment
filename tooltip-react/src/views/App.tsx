import {Tooltip, Button} from 'components';
import 'assets/components.app.scss';

function App() {
  return (
    <div className="dc-app">
      <div className="dc-app-content">
        <div className="dc-app-content--container">
          <Tooltip title="the title">
            <Button>Simple Title</Button>
          </Tooltip>
        </div>
        <div className="dc-app-content--container">
          <Tooltip title={<span>exotic title</span>}>
            <Button>Exotic Tooltip</Button>
          </Tooltip>
        </div>
        <div className="dc-app-content--container">
          <Tooltip title="the title" place="bottom">
            <Button>Bottom Tooltip</Button>
          </Tooltip>
        </div>
        <div className="dc-app-content--container">
          <Tooltip title="the title" place="right">
            <Button>Right Tooltip</Button>
          </Tooltip>
        </div>
        <div className="dc-app-content--container">
          <Tooltip title="the title" place="left">
            <Button>Left Tooltip</Button>
          </Tooltip>
        </div>

        <div className="dc-app-content--container">
          <Tooltip title="the title">
            <a href="/#" className="App-link">
              HTML Lint Tootlip
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default App;
