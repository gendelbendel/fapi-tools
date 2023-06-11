import { useState } from "react";
import { useAtom } from "jotai";

// import Tooltip from "@mui/material/Tooltip";

import { bdToBigNumber } from "../util/bigdouble-bignumber";
import { saveDataAtom } from "../util/atoms";
import { cardCollection } from "../util/constants";

export default function CardCollection() {
  const [saveData] = useAtom(saveDataAtom);
  const [showNames, setShowNames] = useState(true);

  const showNamesHandler = () => {
    setShowNames(!showNames);
  };

  const findCardById = (id: number) =>
    saveData.CardsCollection?.find((saveCard) => saveCard.ID === id);

  return (
    <div>
      <h2>Card Collection</h2>
      <label>
        <input
          type="checkbox"
          checked={showNames}
          onChange={showNamesHandler}
        />
        Show card names?
      </label>
      <div>
        <p>
          With card names hidden, allows for easy copy/pasting into{" "}
          <a href="https://docs.google.com/spreadsheets/d/1bY5Ss_6uhoxxxndKr2oSlhtWHM5k4togQkswuBqKrTU/edit#gid=898724723">
            Hiroko's FAPI_Info spreadsheet
          </a>
        </p>
        {!showNames && (
          <p>
            {" "}
            Note: Need to "paste special" (ctrl+shift+v) on cell G23 (the Temp
            Power number for Att/HP) in the Cards tab
          </p>
        )}
      </div>

      <div className="card-list">
        <table>
          <tr>
            {showNames && (
              <>
                <th>Card Name</th>
                <th>Temporary Power</th>
                <th>Permanent Power</th>
                <th>Card Level</th>
              </>
            )}
          </tr>
          {cardCollection.map((card) => (
            <tr
              key={card.id}
              className={
                findCardById(card.id)?.Found === 0 ? "card-not-found" : ""
              }
            >
              {showNames && <td>{card.name}</td>}
              <td>
                {bdToBigNumber(
                  findCardById(card.id)?.PowerTempBD ?? {
                    mantissa: 0,
                    exponent: 0,
                  }
                )
                  .decimalPlaces(0, 6)
                  .valueOf()}
              </td>
              <td>
                {bdToBigNumber(
                  findCardById(card.id)?.PowerPermaBD ?? {
                    mantissa: 0,
                    exponent: 0,
                  }
                )
                  .decimalPlaces(0, 6)
                  .valueOf()}
              </td>
              <td>{findCardById(card.id)?.Level ?? 0}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
