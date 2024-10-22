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

  processInput(input) {
    if (input === '') return []; // 빈 문자열은 예외로 0을 리턴한다.

    const stringified = stringifyToJSON(input);
    const separator = this.getSeparator(stringified);
    const content = this.extractContent(stringified);

    return this.splitContent(content, separator);
  }

  getSeparator(str) {
    const customSeparator = str.match(this.#CUSTOM_SEPARATOR_REGEXP);

    return customSeparator ? customSeparator[0] : this.#DEFAULT_SEPARATOR;
  }

  extractContent(str) {
    return str
      .replace(this.#CUSTOM_SEPARATOR_REGEXP, '')
      .replace(/^"|"$/g, '')
      .replace('\\\\', '\\');
  }

  splitContent(content, separator) {
    const separatorRegExp = convertCharacterClassRegex(separator);

    return content.split(separatorRegExp);
  }

  calculateSum(input) {
    validatePositiveNumberArray(input);
    const numberArray = convertNumberArray(input);

    return sumArray(numberArray);
  }
}

export default App;
