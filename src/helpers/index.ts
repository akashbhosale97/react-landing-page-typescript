import { getEntry, getEntryByRef } from "../sdk/entry";

export const getEntryData = async (ctype: string) => {
  const response = await getEntry(ctype);
  return response;
};

export const getEntryByURL = async (ctype: string, refPath: string[]) => {
  const response = await getEntryByRef(ctype, [...refPath]);
  return response;
};
