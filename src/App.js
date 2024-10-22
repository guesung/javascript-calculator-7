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
  #DEFAULT_DELIMITER = ',:';
  #CUSTOM_DELIMITER_REGEXP = /\/\/(.+)\\n/;

  async run() {
    const userInput = await readLineAsync();
    const processedInput = this.processInput(userInput);
    const sum = this.calculateSum(processedInput);

    printResult(String(sum));
  }

  /**
   *
   * @param {string} input
   * @returns {string[]}
   */
  processInput(input) {
    if (input === '') return []; // 빈 문자열은 예외로 0을 리턴한다.

    const stringified = stringifyToJSON(input);
    const delimiter = this.getDelimiter(stringified);
    const content = this.extractContent(stringified);

    return this.splitContent(content, delimiter);
  }

  /**
   *
   * @param {string} str
   * @returns {RegExpMatchArray | string}
   */
  getDelimiter(str) {
    const customDelimiter = str.match(this.#CUSTOM_DELIMITER_REGEXP);

    return customDelimiter ? customDelimiter[0] : this.#DEFAULT_DELIMITER;
  }

  /**
   *
   * @param {string} str
   * @returns {string}
   */
  extractContent(str) {
    return str
      .replace(this.#CUSTOM_DELIMITER_REGEXP, '')
      .replace(/^"|"$/g, '')
      .replace('\\\\', '\\');
  }

  /**
   *
   * @param {string} content
   * @param {RegExpMatchArray | string} delimiter
   * @returns {string[]}
   */
  splitContent(content, delimiter) {
    const delimiterRegExp = convertCharacterClassRegex(delimiter);

    return content.split(delimiterRegExp);
  }

  /**
   *
   * @param {string[]} input
   * @returns {number}
   */
  calculateSum(input) {
    validatePositiveNumberArray(input);
    const numberArray = convertNumberArray(input);

    return sumArray(numberArray);
  }
}

export default App;
