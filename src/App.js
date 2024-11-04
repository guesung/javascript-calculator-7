import Calculator from './Calculator.js';
import InputControllers from './controllers/InputControllers.js';
import OutputController from './controllers/OutputController.js';

class App {
  async run() {
    const userInput = await InputControllers.getUserInput();

    const sum = Calculator.calculateSum(userInput);

    OutputController.printResult(sum);
  }
}

export default App;
