// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "windows"] */

import * as React from 'react';
import './todo-results.scss';

export const TodoResults = () => {
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
