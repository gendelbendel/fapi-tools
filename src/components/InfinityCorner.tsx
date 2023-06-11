import { useState } from "react";
import { useAtom } from "jotai";

import Tooltip from "@mui/material/Tooltip";

import { saveDataAtom } from "../util/atoms";
import { infinityCorner } from "../util/constants";

export default function InfinityCorner() {
  const [saveData] = useAtom(saveDataAtom);
  const [showNames, setShowNames] = useState(true);

  const showNamesHandler = () => {
    setShowNames(!showNames);
  };

  return (
    <div>
      <h2>Infinity Corner</h2>
      <label>
        <input
          type="checkbox"
          checked={showNames}
          onChange={showNamesHandler}
        />
        Show upgrade names?
      </label>
      <div>
        <p>
          With upgrades hidden, allows for easy copy/pasting into{" "}
          <a href="https://docs.google.com/spreadsheets/d/1bY5Ss_6uhoxxxndKr2oSlhtWHM5k4togQkswuBqKrTU/edit#gid=898724723">
            Hiroko's FAPI_Info spreadsheet
          </a>
        </p>
      </div>
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
                  {showNames && `"${upgrade.name}" level: `}
                  {saveData[upgrade.saveKey] as number}
                </span>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
