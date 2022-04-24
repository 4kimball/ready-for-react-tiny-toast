import React, { FC } from "react";

import { removeTodo } from "src/utils";

interface Props {
  todo: Todo;
  forceUpdate: () => void;
}
const TodoItem: FC<Props> = ({ todo, forceUpdate }) => {
  const handleClickRemove = () => {
    removeTodo(todo.id);
    forceUpdate();
  };
  return (
    <div>
      <p>{todo.text}</p>
      <button onClick={handleClickRemove}>삭제</button>
    </div>
  );
};

export default TodoItem;
