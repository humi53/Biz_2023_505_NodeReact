import logo from "./logo.svg";
import "./App.css";
import CalcMain from "./comps/CalcMain";

function App() {
  const calcHandler = () => {
    const num1 = Number(document.querySelector(".num1").value);
    const num2 = Number(document.querySelector(".num2").value);
    const sum = document.querySelector(".sum");
    const sub = document.querySelector(".sub");
    const mul = document.querySelector(".mul");
    const div = document.querySelector(".div");

    let bNum = num1;
    let sNum = num2;
    if (num2 > num1) {
      bNum = num2;
      sNum = num1;
    }

    sum.innerHTML = `덧셈 : ${num1} + ${num2} = ${num1 + num2}`;
    sub.innerHTML = `뺄셈 : ${bNum} - ${sNum} = ${bNum - sNum}`;
    mul.innerHTML = `곱셈 : ${num1} x ${num2} = ${num1 * num2}`;
    div.innerHTML = `나눗셈 : ${bNum} / ${sNum} = ${parseInt(bNum / sNum)}`;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CalcMain />
      </header>
    </div>
  );
}

export default App;
