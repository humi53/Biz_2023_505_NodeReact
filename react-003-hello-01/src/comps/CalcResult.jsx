const CalcResult = (props) => {
  const { sum, sub, mul, div, num1, num2 } = props;

  return (
    <div>
      <p>
        <label className="sum">
          덧셈 : {num1} + {num2} = {sum}
        </label>
      </p>
      <p>
        <label className="sub">
          뺄셈 : {num1} - {num2} = {sub}
        </label>
      </p>
      <p>
        <label className="mul">
          곱셈 : {num1} x {num2} = {mul}
        </label>
      </p>
      <p>
        <label className="div">
          나눗셈 : {num1} / {num2} = {div}
        </label>
      </p>
    </div>
  );
};
export default CalcResult;
