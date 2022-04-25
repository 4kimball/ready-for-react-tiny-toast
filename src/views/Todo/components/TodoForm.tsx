import React, { FC, useState } from "react";

interface Props {
  handleClickSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    text: string
  ) => void;
}

const TodoForm: FC<Props> = ({ handleClickSubmit }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (newText: string) => {
    setText(newText);
  };

  return (
    <>
      <form onSubmit={(e) => handleClickSubmit(e, text)}>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </>
  );
};

export default TodoForm;
