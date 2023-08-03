import { useState } from "react";

// 여기는 Todo Content 를 입력하고 추가를 실행하는 Component
/**
 *
 * @param {*} props
 *    부모 Comps 로 부터 전달받은 모든 것을 담아오는 바구니
 *    props 를 통하여 전달받은 모든 것은 "Read Only" 이다
 *    props 를 통하여 전달받은
 *      state 도 여기에서 절대 변경 할수 없다
 *    props 통하여 전달받은 state를 변경하려면
 *      state 를 변경할 함수도 같이 전달받아야 한다
 * @returns
 */
const TodoInput = (props) => {
  // 화면에 데이터를 Rendering 할때 사용할 State(변수) 선언
  // const [content, setContent] = useState("");

  const { todo, setTodo, todoInput } = props;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setTodo({ ...todo, content: value });
  };

  const btnClickHandler = (e) => {
    // 추가 버튼을 클릭했을때 할일
    todoInput(todo.content);
    setTodo({ ...todo, content: "" });
  };

  return (
    <div className="input">
      <input
        placeholder="TODO"
        value={todo.content}
        onChange={inputChangeHandler}
      />

      <button onClick={btnClickHandler} disabled={todo.content.length < 2}>
        저장
      </button>
    </div>
  );
};
export default TodoInput;
