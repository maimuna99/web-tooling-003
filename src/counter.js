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
      <div style={{ flexWrap: "wrap", display: "flex" }}>
        <p
          data-testid="counter-number"
          className="bg-indigo-600 text-white"
          style={{ borderRadius: "90px", padding: "6px", margin: "5px" }}
        >
          {state}
        </p>
        <button
          data-testide="counter-button"
          onClick={onButtonClick}
          className="bg-indigo-600 text-white"
          style={{ borderRadius: "5px", padding: "6px" }}
        >
          click here
        </button>
      </div>
    </>
  );
};
export default Counter;
