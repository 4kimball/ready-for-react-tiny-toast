import React, { useState, useReducer, useEffect } from "react";

import { getAllTodo, setTodo, removeTodo } from "src/utils";

const useTodo = () => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [todoList, setTodoList] = useState<Todo[] | null>(null);

  useEffect(() => {
    setTodoList(getAllTodo());
  }, [_]);

  const handleClickSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    text: string
  ) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      text,
    };
    setTodo(todo.id, todo);
    forceUpdate();
  };

  const handleClickRemove = (id: number) => {
    removeTodo(id);
    forceUpdate();
  };

  return { todoList, handleClickSubmit, handleClickRemove };
};

export default useTodo;
