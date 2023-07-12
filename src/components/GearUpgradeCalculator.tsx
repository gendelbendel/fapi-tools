import { useState } from "react";

export default function GearUpgradeCalculator() {
  const [worldChoice, setWorldChoice] = useState(1);
  const [materialsAvailable, setMaterialsAvailable] = useState(0);

  const worldChoiceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value <= 0) value = 1;
    setWorldChoice(value);
  };

  const materialsAvailableHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = parseInt(e.target.value);
    if (value <= 0) value = 1;
    setMaterialsAvailable(value);
  };

  return (
    <div>
      <h2>Gear Upgrade Calculator</h2>
      <p>
        World where gear came from:{" "}
        <input
          type="number"
          value={worldChoice}
          onChange={worldChoiceHandler}
        />
      </p>
      <p>
        Amount of materials you wish to spend:{" "}
        <input
          type="number"
          value={materialsAvailable}
          onChange={materialsAvailableHandler}
        />
      </p>
      <p>
        Highest level for a single item:{" "}
        {calculateHighestLevel(worldChoice, materialsAvailable, 1).highestLevel}
      </p>
      <p>
        Highest even level for a full set of six pieces:{" "}
        {calculateHighestLevel(worldChoice, materialsAvailable, 6).highestLevel}
      </p>
    </div>
  );
}

export const calculateHighestLevel = (
  world: number,
  totalMaterials: number,
  gearPieces: number
) => {
  let totalLevel = 0;
  let upgradeFactor = 1;
  let materials = totalMaterials;

  while (true) {
    let upgradeCost = world * (totalLevel + 1) * upgradeFactor * gearPieces;
    if (materials >= upgradeCost) {
      materials -= upgradeCost;
      totalLevel += 1;
      if ((totalLevel + 1) % 10 === 0) {
        upgradeFactor *= 2;
      }
    } else {
      break;
    }
  }

  return {
    highestLevel: totalLevel,
    remainingMaterials: materials,
    spentMaterials: totalMaterials - materials,
  };
};
