// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "windows"] */

import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => todos.filter((todo) => todo.checked).length;

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
