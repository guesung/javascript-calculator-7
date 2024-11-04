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
    const sum = App.#calculateSum(processedInput);

    printResult(String(sum));
  }

  processInput(input) {
    if (input === '') return [];

    const stringified = stringifyToJSON(input);
    const delimiter = this.getDelimiter(stringified);
    const content = this.extractContent(stringified);

    return App.#splitContent(content, delimiter);
  }

  getDelimiter(str) {
    const customDelimiter = str.match(this.#CUSTOM_DELIMITER_REGEXP);

    if (customDelimiter) return customDelimiter[0];
    return this.#DEFAULT_DELIMITER;
  }

  extractContent(str) {
    return str
      .replace(this.#CUSTOM_DELIMITER_REGEXP, '')
      .replace(/^"|"$/g, '')
      .replace('\\\\', '\\');
  }

  static #splitContent(content, delimiter) {
    const delimiterRegExp = convertCharacterClassRegex(delimiter);

    return content.split(delimiterRegExp);
  }

  static #calculateSum(input) {
    validatePositiveNumberArray(input);
    const numberArray = convertNumberArray(input);

    return sumArray(numberArray);
  }
}

export default App;
