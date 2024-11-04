import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_INFO_MESSAGE } from './constants.js';

export const readLineAsync = async () => {
  const response = await Console.readLineAsync(INPUT_INFO_MESSAGE);
  return response;
};

export const printResult = (str) => {
  Console.print(`결과 : ${str}`);
};

export const stringifyToJSON = (str) => JSON.stringify(str);

export const sumArray = (numberArray) =>
  numberArray.reduce((prev, cur) => prev + cur, 0);

export const validatePositiveNumberArray = (array) => {
  if (!Array.isArray(array)) throw new Error(ERROR_MESSAGE);
  array.forEach((item) => {
    if (isNaN(item) || Number(item) <= 0) throw new Error(ERROR_MESSAGE);
  });
};

export const convertNumberArray = (array) => array.map((it) => Number(it));

export const convertCharacterClassRegex = (delimiter) =>
  new RegExp(`[${delimiter}]`);
