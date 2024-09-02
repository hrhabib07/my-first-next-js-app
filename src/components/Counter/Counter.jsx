"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <div>
      <div className="text-2xl">
        <h1>Counter : {counterValue}</h1>
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-accent"
          onClick={() => setCounterValue(counterValue + 1)}
        >
          Increase
        </button>
        <button
          className="btn btn-error"
          onClick={() => setCounterValue(counterValue - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
