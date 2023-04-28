import { useAtom } from "jotai";

import SaveConverter from "./components/SaveConverter";
import AscensionInfo from "./components/AscensionInfo";
import InfinityCorner from "./components/InfinityCorner";
import Footer from "./components/Footer";

import { saveDataAtom } from "./util/atoms";
import { isObjectEmpty } from "./util/object";

import "./App.css";

function App() {
  const [saveData] = useAtom(saveDataAtom);

  return (
    <>
      <div className="container">
        <div className="card">
          {isObjectEmpty(saveData) && (
            <div>
              <h2>Instructions</h2>
              <p>Upload your fapi-save.txt file</p>
              <p>Directory where save file exists:</p>
              <p>
                <code>
                  %AppData%\..\LocalLow\Oni Gaming\Farmer Against Potatoes Idle
                </code>{" "}
              </p>
            </div>
          )}
          <h2>Upload file</h2>
          <SaveConverter />
        </div>
        {!isObjectEmpty(saveData) && (
          <div>
            <AscensionInfo />
            <InfinityCorner />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
