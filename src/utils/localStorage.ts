export const getAllTodo = (): Todo[] => {
  const keys = Object.keys(localStorage);
  const todoList: Todo[] = [];
  keys.forEach((key) => {
    const todo = JSON.parse(localStorage.getItem(key) || "");
    todoList.push(todo);
  });

  return todoList;
};

export const setTodo = (id: number, todo: Todo) => {
  localStorage.setItem(String(id), JSON.stringify(todo));
};

export const removeTodo = (id: number) => {
  localStorage.removeItem(String(id));
};
