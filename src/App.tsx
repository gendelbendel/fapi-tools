import SaveConverter from "./SaveConverter";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>fapi-save.txt to JSON Converter</h1>
      <div className="card">
        <h2>Instructions</h2>
        <p>Upload your fapi-save.txt file</p>
        <p>Directory where save file exists:</p>
        <p>
          <code>
            %AppData%\..\LocalLow\Oni Gaming\Farmer Against Potatoes Idle
          </code>{" "}
        </p>
        <h2>Upload file</h2>
        <SaveConverter />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Find the Github repo{" "}
        <a href="https://github.com/gendelbendel/fapi-tools"> here.</a>
      </p>
    </>
  );
}

export default App;
