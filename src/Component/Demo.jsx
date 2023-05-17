import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
          className="p-2 bg-blue-500 rounded-md"
        >
          Change Theme
        </button>
      </div>
      <div
        className={
          "m-4 p-2 h-96 w-96 border border-black " +
          (isDarkTheme && "bg-gray-900 ")
        }
      >
        <input
          placeholder="Enter"
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border border-black w-72 p-2"
        />
      </div>
      <div>
        <h1>Calculate nth Prime Number</h1>
        <b>Prime Number is {prime}</b>
      </div>
    </>
  );
};

export default Demo;
