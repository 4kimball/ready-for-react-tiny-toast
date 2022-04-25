import React, { FC } from "react";

interface Props {
  text: string;
  handleChangeText: (newText: string) => void;
  handleClickSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    text: string
  ) => void;
}

const TodoForm: FC<Props> = ({ text, handleChangeText, handleClickSubmit }) => {
  return (
    <>
      <form onSubmit={(e) => handleClickSubmit(e, text)}>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChangeText(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </>
  );
};

export default TodoForm;
