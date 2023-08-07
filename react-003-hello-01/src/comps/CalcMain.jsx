import CalcInput from "./CalcInput";
import CalcResult from "./CalcResult";
import { useState } from "react";
const CalcMain = () => {
  const [sum, setSum] = useState(0);
  const [sub, setSub] = useState(0);
  const [mul, setMul] = useState(0);
  const [div, setDiv] = useState(0);
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  cosnt[(nums, setNums)] = useState({ num1: 0, num2: 0, bNum: 0, sNum: 0 });
  const calcHandler = () => {
    let bNum = num1;
    let sNum = num2;
    if (num2 > num1) {
      bNum = num2;
      sNum = num1;
    }
    setSum(num1 + num2);
    setSub(bNum - sNum);
    setMul(num1 * num2);
    setDiv(bNum / sNum);
  };

  return (
    <>
      <CalcInput nums={nums} setNums={setNums} calcHandler={calcHandler} />
      <CalcResult sum={sum} sub={sub} mul={mul} div={div} nums={setNums} />
    </>
  );
};
export default CalcMain;
