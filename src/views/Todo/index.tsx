import React, { FC, useState, useReducer } from "react";
import { useEffect } from "react";

import useTodo from "src/hooks/useTodo";
import { getAllTodo } from "src/utils";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const Todo: FC = () => {
  const { todoList, handleClickSubmit, handleClickRemove } = useTodo();
  return (
    <div>
      <h2>My ToDo</h2>
      <TodoForm handleClickSubmit={handleClickSubmit} />
      <TodoList todoList={todoList} handleClickRemove={handleClickRemove} />
    </div>
  );
};

export default Todo;
