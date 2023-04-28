import { useAtom } from "jotai";

import Tooltip from "@mui/material/Tooltip";

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
            <Tooltip
              title={`Ascension count requirement: ${upgrade.ascensionReq}`}
              arrow
              placement="right"
            >
              <span
                className={
                  upgrade.ascensionReq > saveData.AscensionCount!
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
  );
}
