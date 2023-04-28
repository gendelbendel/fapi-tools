import { atomWithStorage } from "jotai/utils";

import { FAPISaveData } from "../ts/interfaces/saveData.interfaces";

export const saveDataAtom = atomWithStorage<FAPISaveData>("rawSaveData", {});
