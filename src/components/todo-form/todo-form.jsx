/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable no-console */
// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "windows"] */

import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");
  console.log(setTodos, "2");
  console.log(todos);

  const handleSubmit = (e) => {
    let i = todos.length;
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: i + 1,
        label: task,
        checkbox: false,
      },
    ]);
    console.log(task);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};
