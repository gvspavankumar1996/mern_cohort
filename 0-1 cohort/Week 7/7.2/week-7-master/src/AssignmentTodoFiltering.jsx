import React, { useEffect } from "react";
import {
  filteredTodos,
  showFilteredTodos,
  todos,
  userInput,
} from "./store/atoms/todos";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const AssignmentTodoFiltering = () => {
  return (
    <div>
      <RecoilRoot>
        <SearchTodos />
        <Todos />
      </RecoilRoot>
    </div>
  );
};
const SearchTodos = () => {
  const [userInputValue, setUserInput] = useRecoilState(userInput);
  const updateShowFilteredTodos = useSetRecoilState(showFilteredTodos);
  // const filteredTodosValues = useRecoilValue(filteredTodos);
  return (
    <div>
      <input
        value={userInputValue}
        type="text"
        onChange={(e) => {
          if (e.target.value === "") {
            updateShowFilteredTodos(false);
          }
          setUserInput(e.target.value);
        }}
      />
      <button onClick={() => updateShowFilteredTodos(true)}>
        Filter Todos
      </button>
    </div>
  );
};

const Todos = React.memo(function Todos() {
  const todosList = useRecoilValue(todos);
  const filteredTodosValues = useRecoilValue(filteredTodos);
  const showFilteredTodosValue = useRecoilValue(showFilteredTodos);

  console.log(todosList, "todo");

  return (
    <div>
      <br />
      {!showFilteredTodosValue
        ? todosList?.map((todo) => <div key={todo.id}>{todo.description}</div>)
        : filteredTodosValues?.map((todo) => (
            <div key={todo.id}>{todo.description}</div>
          ))}
    </div>
  );
});

export default AssignmentTodoFiltering;
