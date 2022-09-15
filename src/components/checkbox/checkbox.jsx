/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "windows"] */

import * as React from "react";
import "./checkbox.scss";

export const Checkbox = ({
   onClick, checked, onDelete, label, onKeyUp 
  }) => {
  return (
    <div className="checkbox">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked
        className="checkbox-content"
        onClick={onClick}
        onKeyUp={onKeyUp}
      >
        <input type="checkbox" checked={checked} onChange={onClick} name="checkbox" />
        <span className={checked ? "checkbox-checked" : ""}>{label}</span>
      </div>
      <button type="button" className="checkbox-delete" onClick={onDelete}>
        x
      </button>
    </div>
  );
};
