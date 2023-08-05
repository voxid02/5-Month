import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNumber1, setNumber2, setResult, setError } from '../../store/calculatorSlice';

const Calculator = () => {
  const dispatch = useDispatch();
  const { number1, number2, result, error } = useSelector((state) => state.calculator);

  const handleOperation = (operation) => {
    if (number1 === '' || number2 === '') {
      dispatch(setError('Заполните оба поля'));
      return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    let calculatedResult;
    switch (operation) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        dispatch(setError('Недопустимая операция'));
        return;
    }

    dispatch(setResult(calculatedResult));
  };

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => dispatch(setNumber1(e.target.value))}
        placeholder='first number'
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => dispatch(setNumber2(e.target.value))}
        placeholder='second number'
      />
      <div>
        <button onClick={() => handleOperation('+')}>add</button>
        <button onClick={() => handleOperation('-')}>substract</button>
        <button onClick={() => handleOperation('*')}>multiply</button>
        <button onClick={() => handleOperation('/')}>divide</button>
      </div>
      {result !== null && <p>Результат: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Calculator;
