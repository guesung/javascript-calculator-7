//@ts-check
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_INFO_MESSAGE } from './constants.js';

/**
 *
 * @returns string
 */
export async function readLineAsync() {
  return await MissionUtils.Console.readLineAsync(INPUT_INFO_MESSAGE);
}

/**
 *
 * @param {string} str
 */
export function printResult(str) {
  MissionUtils.Console.print(`결과 : ${str}`);
}

/**
 *
 * @param {string} str
 * @returns
 */
export function stringifyToJSON(str) {
  return JSON.stringify(str);
}

/**
 *
 * @param {number[]} numberArray
 * @returns
 */
export function sumArray(numberArray) {
  return numberArray.reduce((prev, cur) => prev + cur, 0);
}

/**
 *
 * @param {any[]} array
 */
export function validatePositiveNumberArray(array) {
  if (!Array.isArray(array)) throw new Error(ERROR_MESSAGE);
  for (const item of array) {
    if (isNaN(item) || Number(item) <= 0) throw new Error(ERROR_MESSAGE);
  }
}

/**
 *
 * @param {unknown[]} array
 * @returns
 */
export function convertNumberArray(array) {
  return array.map(it => Number(it));
}

/**
 *
 * @param {string} delimiter
 * @returns
 */
export function convertCharacterClassRegex(delimiter) {
  return new RegExp(`[${delimiter}]`);
}
