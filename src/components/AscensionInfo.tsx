import { useAtom } from "jotai";

import { saveDataAtom } from "../util/atoms";

export default function AscensionInfo() {
  const [saveData] = useAtom(saveDataAtom);

  return (
    <div>
      <h2>Ascension</h2>
      <p>Current ascension level: {saveData.AscensionCount}</p>
    </div>
  );
}
