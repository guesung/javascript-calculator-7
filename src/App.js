import InputControllers from './controllers/InputControllers.js';
import {
  convertNumberArray,
  printResult,
  sumArray,
  validatePositiveNumberArray,
} from './utils.js';

class App {
  async run() {
    const userInput = await InputControllers.getUserInput();

    const sum = App.#calculateSum(userInput);

    printResult(String(sum));
  }

  static #calculateSum(input) {
    validatePositiveNumberArray(input);
    const numberArray = convertNumberArray(input);

    return sumArray(numberArray);
  }
}

export default App;
