import { useAtom } from "jotai";

import { saveDataAtom } from "../util/atoms";
import { infinityCorner } from "../util/constants";

export default function InfinityCorner() {
  const [saveData] = useAtom(saveDataAtom);

  return (
    <div>
      <h2>Infinity Corner</h2>
      <ul>
        {infinityCorner.map((upgrade) => (
          <li>
            {upgrade.name}: {saveData[upgrade.saveKey] as number}
          </li>
        ))}
      </ul>
    </div>
  );
}
