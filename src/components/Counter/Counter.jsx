"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <div>
      <div className="text-2xl">
        <h1>Counter : {counterValue}</h1>
      </div>
      <div>
        <button
          className="p-2 border me-2"
          onClick={() => setCounterValue(counterValue + 1)}
        >
          Increase
        </button>
        <button
          className="p-2 border me-2"
          onClick={() => setCounterValue(counterValue - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
