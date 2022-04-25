import React, { FC } from "react";

interface Props {
  todo: Todo;
  handleClickRemove: (id: number) => void;
}
const TodoItem: FC<Props> = ({ todo, handleClickRemove }) => {
  return (
    <div className="todo-item">
      <p>{todo.text}</p>
      <button onClick={() => handleClickRemove(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
