const express = require('express');
const Calculator = require('./modules/calculator.js');

const PORT = process.env.PORT || 3000;
const app = express();
const calc = new Calculator.Calculator();

app.get('/', (req, res) => {
  res.send('[CPT]');
});

app.get('/add', (req, res) => {
  res.send(`${req.query.a} + ${req.query.b} = \
    ${calc.add(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});

app.get('/sub', (req, res) => {
  res.send(`${req.query.a} - ${req.query.b} = \
    ${calc.subtract(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});

app.get('/mul', (req, res) => {
  res.send(`${req.query.a} * ${req.query.b} = \
    ${calc.multiply(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});

app.get('/div', (req, res) => {
  const result = calc.divide(parseFloat(req.query.a), parseFloat(req.query.b));
  if (result == Infinity) {
    res.send(`Cannot divide ${req.query.a} by zero`);
  }
  res.send(`${req.query.a} / ${req.query.b} = \
    ${calc.multiply(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});

//NEW FEATURE
app.get('/pow', (req, res) => {
  res.send(`${req.query.a} ^ ${req.query.b} = ${calc.power(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});

app.listen(PORT, () => {
  console.log(`Calculator app listening on port ${PORT}!`);
});
