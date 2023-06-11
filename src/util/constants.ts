import {
  InfinityCornerConstant,
  CardCollectionConstant,
} from "../ts/interfaces/constants.interfaces";

const infinityCorner: ReadonlyArray<InfinityCornerConstant> = [
  {
    id: 1,
    name: "Star (All upgrades)",
    suggestedWeight: 100,
    suggestedWeightType: "percent",
    ascensionReq: 3,
    growth: 1.2,
    growthMulti: 120,
    saveKey: "REP3UpgradeAllLevel",
  },
  {
    id: 2,
    name: "Attack",
    suggestedWeight: 10,
    suggestedWeightType: "flat",
    ascensionReq: 1,
    growth: 1.05,
    growthMulti: 1,
    saveKey: "REP3AttackLevel",
  },
  {
    id: 3,
    name: "HP",
    suggestedWeight: 2,
    suggestedWeightType: "flat",
    ascensionReq: 1,
    growth: 1.05,
    growthMulti: 1,
    saveKey: "REP3HPLevel",
  },
  {
    id: 4,
    name: "Potato",
    suggestedWeight: 35,
    suggestedWeightType: "flat",
    ascensionReq: 2,
    growth: 1.05,
    growthMulti: 2,
    saveKey: "REP3PotatoLevel",
  },
  {
    id: 5,
    name: "Class EXP",
    suggestedWeight: 46,
    suggestedWeightType: "flat",
    ascensionReq: 2,
    growth: 1.05,
    growthMulti: 2,
    saveKey: "REP3ClassExpLevel",
  },
  {
    id: 6,
    name: "Skull",
    suggestedWeight: 57,
    suggestedWeightType: "flat",
    ascensionReq: 3,
    growth: 1.1,
    growthMulti: 3,
    saveKey: "REP3SkullLevel",
  },
  {
    id: 7,
    name: "Confection",
    suggestedWeight: 1,
    suggestedWeightType: "flat",
    ascensionReq: 3,
    growth: 1.1,
    growthMulti: 3,
    saveKey: "REP3ConfectionLevel",
  },
  {
    id: 8,
    name: "Poop",
    suggestedWeight: 1,
    suggestedWeightType: "flat",
    ascensionReq: 4,
    growth: 1.1,
    growthMulti: 4,
    saveKey: "REP3PoopLevel",
  },
  {
    id: 9,
    name: "Whack Score",
    suggestedWeight: 1,
    suggestedWeightType: "flat",
    ascensionReq: 4,
    growth: 1.1,
    growthMulti: 4,
    saveKey: "REP3WhackScoreLevel",
  },
  {
    id: 10,
    name: "Item Rating",
    suggestedWeight: 1227,
    suggestedWeightType: "flat",
    ascensionReq: 5,
    growth: 1.15,
    growthMulti: 5,
    saveKey: "REP3ItemRatingLevel",
  },
  {
    id: 11,
    name: "Milk",
    suggestedWeight: 44,
    suggestedWeightType: "flat",
    ascensionReq: 5,
    growth: 1.15,
    growthMulti: 5,
    saveKey: "REP3MilkLevel",
  },
  {
    id: 12,
    name: "Brewing EXP",
    suggestedWeight: 1,
    suggestedWeightType: "flat",
    ascensionReq: 6,
    growth: 1.2,
    growthMulti: 25,
    saveKey: "REP3BrewLevel",
  },
  {
    id: 13,
    name: "Larva Efficiency",
    suggestedWeightType: "flat",
    suggestedWeight: 1,
    ascensionReq: 6,
    growth: 1.2,
    growthMulti: 25,
    saveKey: "REP3LarvaEffLevel",
  },
  {
    id: 14,
    name: "Calcium",
    suggestedWeight: 1,
    suggestedWeightType: "flat",
    ascensionReq: 8,
    growth: 1.25,
    growthMulti: 50,
    saveKey: "REP3CalciumLevel",
  },
  {
    id: 15,
    name: "Fermenting EXP",
    suggestedWeightType: "flat",
    suggestedWeight: 1,
    ascensionReq: 8,
    growth: 1.25,
    growthMulti: 50,
    saveKey: "REP3FermentingLevel",
  },
  {
    id: 16,
    name: "Pet Damage",
    suggestedWeight: 2455,
    suggestedWeightType: "flat",
    ascensionReq: 10,
    growth: 1.4,
    growthMulti: 1000,
    saveKey: "REP3PetDmgLevel",
  },
  {
    id: 17,
    name: "Pet Level EXP",
    suggestedWeight: 1473,
    suggestedWeightType: "flat",
    ascensionReq: 10,
    growth: 1.4,
    growthMulti: 1000,
    saveKey: "REP3PetLevelExpLevel",
  },
  {
    id: 18,
    name: "Card Power",
    suggestedWeight: 245,
    suggestedWeightType: "flat",
    ascensionReq: 12,
    growth: 1.5,
    growthMulti: 5000,
    saveKey: "REP3CardPowerLevel",
  },
  {
    id: 19,
    name: "Residue",
    suggestedWeight: 614,
    suggestedWeightType: "flat",
    ascensionReq: 12,
    growth: 1.5,
    growthMulti: 5000,
    saveKey: "REP3ResidueBonusLevel",
  },
] as const;

const cardCollection: ReadonlyArray<CardCollectionConstant> = [
  {
    id: 17,
    name: "Att/HP",
  },
  {
    id: 1,
    name: "Potato",
  },
  {
    id: 2,
    name: "Class",
  },
  {
    id: 3,
    name: "Skull",
  },
  {
    id: 9,
    name: "Whack",
  },
  {
    id: 7,
    name: "Poop",
  },
  {
    id: 4,
    name: "Confection",
  },
  {
    id: 14,
    name: "Worm Quantity",
  },
  {
    id: 15,
    name: "Larva Quantity",
  },
  {
    id: 16,
    name: "Larva Efficiency",
  },
  {
    id: 8,
    name: "Milk",
  },
  {
    id: 10,
    name: "Brewing",
  },
  {
    id: 11,
    name: "Calcium",
  },
  {
    id: 12,
    name: "Fermenting",
  },
  {
    id: 13,
    name: "Residue",
  },
  {
    id: 6,
    name: "Item Rating",
  },
  {
    id: 5,
    name: "Reincarnation Exp",
  },
  {
    id: 19,
    name: "Pet Level Exp",
  },
  {
    id: 18,
    name: "Pet Damage",
  },
  {
    id: 20,
    name: "Pet Rank Exp",
  },
] as const;

const cardCollectionOrder: ReadonlyArray<number> = [
  17, 1, 2, 3, 9, 7, 4, 14, 15, 16, 8, 10, 11, 12, 13, 6, 5, 19, 18, 20,
];

export { infinityCorner, cardCollection, cardCollectionOrder };
