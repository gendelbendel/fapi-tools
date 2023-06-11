import BigNumber from "bignumber.js";

import { BigDouble } from "../ts/interfaces/saveData.interfaces";

export const bdToBigNumber = (bdSaveObject: BigDouble): BigNumber =>
  BigNumber(`${bdSaveObject.mantissa}e${bdSaveObject.exponent}`);
