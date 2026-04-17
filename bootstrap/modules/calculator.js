/**
 * Calculator module
 */

/**
 * A basic class to performs calculations
 */
class Calculator {
  /**
   * Performs addition
   * @param {Float} a
   * @param {Float} b
   * @return {Float} Sum of the parameters
   */
  add(a, b) {
    return a + b;
  }
  /**
   * Performs multiplication
   * @param {Float} a
   * @param {Float} b
   * @return {Float} Product of the parameters
   */
  multiply(a, b) {
    return a * b;
  }
  /**
   * Performs division
   * @param {Float} a
   * @param {Float} b
   * @return {(Float | Infinity)} Division of a by b, Infinity if divisor is 0
   */
  divide(a, b) {
    return a / b;
  }
  /**
   * Performs substraction
   * @param {Float} a
   * @param {Float} b
   * @return {Float} Difference between a and b
   */
  subtract(a, b) {
    return a - b;
  }

  power(a, b) { //NEW FEATURE
    if (b < 0)  
        return 1/ a * this.power(a, b+1);
    else if(b > 0)
        return a * this.power(a, b - 1)
    else
        return 1;
}
}

module.exports = {Calculator};
