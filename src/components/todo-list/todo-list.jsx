/* eslint-disable no-confusing-arrow */
/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable space-before-blocks */
/* eslint-disable brace-style */
/* eslint-disable quotes */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "windows"] */

import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [check, setCheck] = React.useState(todos.checked);
  const handleDelete = (id) => {
    // Fix an ability to delete task
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    // eslint-disable-next-line block-spacing, quotes
     setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }

      return todo;
    }));
    // setCheck(!check);
    // todos[id].checked = check;
    // console.log(todos[id].checked, id);
    // if (todos[id].checked === true){
    //   todos[id].checked === false;
    // }
    // else {
    //   todos[id].checked === true;
    // }
    // console.log(id, check);
    // setCheck(!(todos[id].checked));
    // setCheck(!todos[id].checked);
    //   setTodos([...todos, todos[id].checked = check]);
  };
  React.useEffect(() => {})

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
