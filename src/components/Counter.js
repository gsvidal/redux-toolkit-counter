import { useState } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isCounterOpen = useSelector((state) => state.showCounter);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleIncrease = () => {
    dispatch({ type: 'increase', amount: +inputValue });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterOpen && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment 1</button>
        <button onClick={handleDecrement}>Decrement 1</button>
        <div>
          <button onClick={handleIncrease}>Increase by: {inputValue}</button>
          <input type="number" onChange={handleChange} />
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
