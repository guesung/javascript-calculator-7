import { convertNumberArray, sumArray } from './utils';

class Calculator {
  static calculateSum(value) {
    const numberArray = convertNumberArray(value);

    return sumArray(numberArray);
  }
}

export default Calculator;
