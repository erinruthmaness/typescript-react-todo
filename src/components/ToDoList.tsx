import React from "react";

import "../styles/list.css";

interface ToDoListProps {
  items: { id: string; text: string }[];
  clearItemHandler: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ items, clearItemHandler }) => {
  return (
    <ul>
      {items.length > 0 &&
        items.map((toDo) => (
          <li key={toDo.id}>
            {toDo.text}
            <button onClick={() => clearItemHandler(toDo.id)}>&#10005;</button>
          </li>
        ))}
    </ul>
  );
};

export default ToDoList;
