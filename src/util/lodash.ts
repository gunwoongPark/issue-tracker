import { isNaN, isNil } from "lodash";

export const isNotNil = (value: any) => {
  return !isNil(value);
};

export const isNotNaN = (value: any) => {
  return !isNaN(value);
};
