import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import BBsMain from "./comps/BBsMain";
import { hello } from "./modules/FetchModule";

// 여기는 App.js
function App() {
  const [title, setTitle] = useState("");

  // 화면이 mount 될때 작동되도록 event 핸들러 등록
  // 두번째 파라미터를 빈(black) 배열([])로 추가하면
  // Effect() 의해 실행할 함수는 화면이 rendering 된 후 한번만 실행된다
  // useEffect( () => { 실행할함수() }, [])

  // hello() 함수는 await 를 부착하여 결과를 기다려야 하는 함수
  // 이 함수에 await 를 부착하기 위해서는 이 함수를 감싸는 함수에 async 를
  // 부착해야 한다

  // 즉시 실행 함수로 만들기
  // 익명 함수 호출방식
  // 생성된 함수를 바로 사용하기
  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "어서와요 React BBS Project 입니다."}</p>
      </header>
      <BBsMain />
    </div>
  );
}

export default App;
