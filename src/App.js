//@ts-check
import {
  stringifyToJSON,
  readLineAsync,
  validatePositiveNumberArray,
  convertCharacterClassRegex,
  sumArray,
  printResult,
  convertNumberArray,
} from './utils.js';

class App {
  #DEFAULT_SEPARATOR = ',:';
  #CUSTOM_SEPARATOR_REGEXP = /\/\/(.+)\\n/;

  async run() {
    const userInput = await readLineAsync();
    const processedInput = this.processInput(userInput);
    const sum = this.calculateSum(processedInput);

    printResult(sum);
  }

  /**
   *
   * @param {string} input
   * @returns
   */
  processInput(input) {
    if (input === '') return []; // 빈 문자열은 예외로 0을 리턴한다.

    const stringified = stringifyToJSON(input);
    const separator = this.getSeparator(stringified);
    const content = this.extractContent(stringified);

    return this.splitContent(content, separator);
  }

  /**
   *
   * @param {string} str
   * @returns
   */
  getSeparator(str) {
    const customSeparator = str.match(this.#CUSTOM_SEPARATOR_REGEXP);

    return customSeparator ? customSeparator[0] : this.#DEFAULT_SEPARATOR;
  }

  /**
   *
   * @param {string} str
   * @returns
   */
  extractContent(str) {
    return str
      .replace(this.#CUSTOM_SEPARATOR_REGEXP, '')
      .replace(/^"|"$/g, '')
      .replace('\\\\', '\\');
  }

  /**
   *
   * @param {string} content
   * @param {string} separator
   * @returns
   */
  splitContent(content, separator) {
    const separatorRegExp = convertCharacterClassRegex(separator);

    return content.split(separatorRegExp);
  }

  /**
   *
   * @param {string[]} input
   * @returns
   */
  calculateSum(input) {
    validatePositiveNumberArray(input);
    const numberArray = convertNumberArray(input);

    return sumArray(numberArray);
  }
}

export default App;
