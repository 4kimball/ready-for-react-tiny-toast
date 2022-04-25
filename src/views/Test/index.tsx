import React, { FC } from "react";
import { render } from "react-dom";
const Test: FC = () => {
  const handleClick = () => {
    const container = document.querySelector(".box");
    render(
      <div>
        <h1>click</h1>
      </div>,
      container
    );
  };
  return (
    <div className="box">
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Test;
