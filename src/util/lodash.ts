import { isArray, isEmpty, isNaN, isNil } from "lodash";

export const isBlank = (value: any) => {
  if (value === "") {
    return true;
  }

  if (isArray(value) && isEmpty(value)) {
    return true;
  }

  return false;
};

export const isNotNil = (value: any) => {
  return !isNil(value);
};

export const isNotNaN = (value: any) => {
  return !isNaN(value);
};
