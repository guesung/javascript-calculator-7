import { ERROR_MESSAGE } from '../constants';
import {
  convertCharacterClassRegex,
  readLineAsync,
  stringifyToJSON,
} from '../utils';

class InputControllers {
  static #DEFAULT_DELIMITER = ',:';
  static #CUSTOM_DELIMITER_REGEXP = /\/\/(.+)\\n/;

  static async getUserInput() {
    const rawUserInput = await readLineAsync();
    const userInput = this.#parseInput(rawUserInput);
    this.#validatePositiveNumberArray(userInput);
    return userInput;
  }

  static #parseInput(input) {
    if (input === '') return [];

    const stringified = stringifyToJSON(input);
    const delimiter = this.#getDelimiter(stringified);
    const content = this.#extractContent(stringified);

    return this.#splitContent(content, delimiter);
  }

  static #getDelimiter(str) {
    const customDelimiter = str.match(this.#CUSTOM_DELIMITER_REGEXP);

    if (customDelimiter) return customDelimiter[0];
    return this.#DEFAULT_DELIMITER;
  }

  static #extractContent(str) {
    return str
      .replace(this.#CUSTOM_DELIMITER_REGEXP, '')
      .replace(/^"|"$/g, '')
      .replace('\\\\', '\\');
  }

  static #splitContent(content, delimiter) {
    const delimiterRegExp = convertCharacterClassRegex(delimiter);

    return content.split(delimiterRegExp);
  }

  static #validatePositiveNumberArray(array) {
    if (!Array.isArray(array)) throw new Error(ERROR_MESSAGE);
    array.forEach((item) => {
      if (isNaN(item) || Number(item) <= 0) throw new Error(ERROR_MESSAGE);
    });
  }
}

export default InputControllers;
