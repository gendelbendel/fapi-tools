import { useAtom } from "jotai";

import Tooltip from "@mui/material/Tooltip";

import { saveDataAtom } from "../util/atoms";
import { infinityCorner } from "../util/constants";

export default function InfinityCorner() {
  const [saveData] = useAtom(saveDataAtom);

  return (
    <div>
      <h2>Infinity Corner</h2>
      <div className="infinity-list">
        <ul>
          {infinityCorner.map((upgrade) => (
            <li key={upgrade.id}>
              <Tooltip
                title={`Ascension count requirement: ${upgrade.ascensionReq}`}
                arrow
                placement="right"
              >
                <span
                  className={
                    upgrade.ascensionReq > (saveData.AscensionCount || 0)
                      ? "ascension-too-low"
                      : ""
                  }
                >
                  "{upgrade.name}" level: {saveData[upgrade.saveKey] as number}
                </span>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
