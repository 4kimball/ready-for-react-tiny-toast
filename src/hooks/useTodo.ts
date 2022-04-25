import React, { useState, useReducer, useEffect } from "react";

import { getAllTodo, setTodo, removeTodo } from "src/utils";

const useTodo = () => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[] | null>(null);

  useEffect(() => {
    setTodoList(getAllTodo());
  }, [_]);

  const handleChangeText = (newText: string) => {
    setText(newText);
  };

  const handleClickSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    text: string
  ) => {
    e.preventDefault();
    if (!text) return;

    const todo = {
      id: Date.now(),
      text,
    };
    setTodo(todo.id, todo);
    setText("");
    forceUpdate();
  };

  const handleClickRemove = (id: number) => {
    removeTodo(id);
    forceUpdate();
  };

  return {
    text,
    todoList,
    handleChangeText,
    handleClickSubmit,
    handleClickRemove,
  };
};

export default useTodo;
