import { FAPISaveData } from "./saveData.interfaces";

export interface InfinityCornerConstant {
  id: number;
  name: string;
  suggestedWeight: number;
  suggestedWeightType: string;
  ascensionReq: number;
  growth: number;
  growthMulti: number;
  saveKey: keyof FAPISaveData;
}

export interface InfinityCornerConstants
  extends ReadonlyArray<InfinityCornerConstant> {}
