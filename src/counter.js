import { useState, useEffect } from "react";

const Counter = () => {
  const [state, setstate] = useState(0);
  const onButtonClick = () => {
    setstate(state + 1);
  };

  useEffect(() => {
    document.title = state;
  }, [state]);

  useEffect(() => {
    if (state === 5) setstate(6);
  }, [state]);

  return (
    <>
      <header>
        <p data-testid="counter-number">{state}</p>
        <button data-testide="counter-button" onClick={onButtonClick}>
          click here
        </button>
      </header>
    </>
  );
};
export default Counter;
