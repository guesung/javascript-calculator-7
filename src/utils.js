import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_INFO_MESSAGE } from './constants.js';

export async function readLineAsync() {
  const response = await Console.readLineAsync(INPUT_INFO_MESSAGE);
  return response;
}

export function printResult(str) {
  Console.print(`결과 : ${str}`);
}

export function stringifyToJSON(str) {
  return JSON.stringify(str);
}

export function sumArray(numberArray) {
  return numberArray.reduce((prev, cur) => prev + cur, 0);
}

export function validatePositiveNumberArray(array) {
  if (!Array.isArray(array)) throw new Error(ERROR_MESSAGE);
  array.forEach((item) => {
    if (isNaN(item) || Number(item) <= 0) throw new Error(ERROR_MESSAGE);
  });
}

export function convertNumberArray(array) {
  return array.map((it) => Number(it));
}

export function convertCharacterClassRegex(delimiter) {
  return new RegExp(`[${delimiter}]`);
}
