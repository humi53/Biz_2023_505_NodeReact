import { useState } from "react";

const CalcInput = (props) => {
  const { nums, setNums, calcHandler } = props;
  const num1ChangeHandler = (e) => {
    const value = e.target.value;
    setNums.num1(Number(value));
    calcHandler();
  };
  const num2ChangeHandler = (e) => {
    const value = e.target.value;
    setNums.num1(Number(value));
    calcHandler();
  };

  return (
    <div>
      <input className="num1" onChange={num1ChangeHandler} value={nums.num1} />
      <input className="num2" onChange={num2ChangeHandler} value={nums.num2} />
    </div>
  );
};
export default CalcInput;
