import { useAtom } from "jotai";

import Instructions from "./components/Instructions";
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
        <h1>FAPI (Farmer Against Potatoes Idle) Tools</h1>
        <div className="card">
          <Instructions />
          <SaveConverter />
        </div>
        {!isObjectEmpty(saveData) && (
          <div className="card">
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
