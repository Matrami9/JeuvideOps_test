const assert = require("assert")
const { describe } = require("mocha")
const Calculator = require("../modules/calculator.js");


describe('Calculator', () => {
    const calc = new Calculator.Calculator();
    describe('Addition', () => {
        it('should return 2 when adding 1 and 1', () => {
            assert.equal(calc.add(1, 1), 2);
        })
        it('should return 0 when adding 0 and 0', () => {
            assert.equal(calc.add(0, 0), 0);
        })
        it('should return 0 when adding -1 and 1', () => {
            assert.equal(calc.add(-1, 1), 0);
        })
    })
    describe('Subtraction', () => {
        it('should return 0 when subtracting 1 from 1', () => {
            assert.equal(calc.subtract(1, 1), 0);
        })
        it('should return 0 when subtracting 0 from 0', () => {
            assert.equal(calc.subtract(0, 0), 0);
        })
        it('should return 0 when subtracting -1 from -1', () => {
            assert.equal(calc.subtract(-1, -1), 0);
        })
    })
    describe('Multiplication', () => {
        it('should return 1 when multiplying 1 and 1', () => {
            assert.equal(calc.multiply(1, 1), 1);
        })
        it('should return 0 when multiplying 0 and 0', () => {
            assert.equal(calc.multiply(0, 0), 0);
        })
        it('should return 1 when multiplying -1 and -1', () => {
            assert.equal(calc.multiply(-1, -1), 1);
        })
        it('should return -1 when multiplying -1 and 1', () => {
            assert.equal(calc.multiply(-1, 1), -1);
        })
    })
    describe('Division', () => {
        it('should return 1 when dividing 1 by 1', () => {
            assert.equal(calc.divide(1, 1), 1);
        })
        it('should return NaN when dividing 42 by 0', () => {
            assert.equal(calc.divide(42, 0), Infinity);
        })
        it('should return 5 when dividing 10 by 2', () => {
            assert.equal(calc.divide(10, 2), 5);
        })
        it('should return -2.5 when dividing -5 by 2', () => {
            assert.equal(calc.divide(-5, 2), -2.5);
        })
    })
})