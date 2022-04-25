import React, { FC } from "react";

import useTodo from "src/hooks/useTodo";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const Todo: FC = () => {
  const {
    text,
    todoList,
    handleChangeText,
    handleClickSubmit,
    handleClickRemove,
  } = useTodo();
  return (
    <div>
      <h2>My ToDo</h2>
      <TodoForm
        text={text}
        handleChangeText={handleChangeText}
        handleClickSubmit={handleClickSubmit}
      />
      <TodoList todoList={todoList} handleClickRemove={handleClickRemove} />
    </div>
  );
};

export default Todo;
