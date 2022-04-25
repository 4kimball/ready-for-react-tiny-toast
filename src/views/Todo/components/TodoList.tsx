import React, { FC } from "react";

import TodoItem from "./TodoItem";
interface Props {
  todoList: Todo[] | null;
  handleClickRemove: (id: number) => void;
}

const TodoList: FC<Props> = ({ todoList, handleClickRemove }) => {
  return (
    <>
      {todoList?.map((todo) => {
        return <TodoItem todo={todo} handleClickRemove={handleClickRemove} />;
      })}
    </>
  );
};

export default TodoList;
