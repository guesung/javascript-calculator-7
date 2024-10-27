// @ts-check
import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_INFO_MESSAGE } from './constants.js';

/**
 *
 * @returns {Promise<string>}
 */
export async function readLineAsync() {
  const response = await Console.readLineAsync(INPUT_INFO_MESSAGE);
  return response;
}

/**
 *
 * @param {string} str
 * @returns {void}
 */
export function printResult(str) {
  Console.print(`결과 : ${str}`);
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
export function stringifyToJSON(str) {
  return JSON.stringify(str);
}

/**
 *
 * @param {number[]} numberArray
 * @returns {number}
 */
export function sumArray(numberArray) {
  return numberArray.reduce((prev, cur) => prev + cur, 0);
}

/**
 *
 * @param {any[]} array
 * @throws {Error}
 */
export function validatePositiveNumberArray(array) {
  if (!Array.isArray(array)) throw new Error(ERROR_MESSAGE);
  array.forEach(item => {
    if (isNaN(item) || Number(item) <= 0) throw new Error(ERROR_MESSAGE);
  });
}

/**
 *
 * @param {unknown[]} array
 * @returns {number[]}
 */
export function convertNumberArray(array) {
  return array.map(it => Number(it));
}

/**
 *
 * @param {RegExpMatchArray | string} delimiter
 * @returns {RegExp}
 */
export function convertCharacterClassRegex(delimiter) {
  return new RegExp(`[${delimiter}]`);
}
