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
      <div>
        <p data-testid="counter-number">{state}</p>
        <button
          data-testide="counter-button"
          onClick={onButtonClick}
          className="bg-indigo-600 text-white"
          style={{ borderRadius: "25px", background: "red" }}
        >
          click here
        </button>
      </div>
    </>
  );
};
export default Counter;
