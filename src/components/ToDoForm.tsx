import React, { useRef, useState } from "react";

import "../styles/form.css";

interface FormProps {
  addNewHandler: (text: string) => void;
  clearAllHandler: () => void;
  toDoCount: number;
}

const ToDoForm: React.FC<FormProps> = ({ addNewHandler, clearAllHandler, toDoCount }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const [isInputValidated, setIsInputValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newText = textInputRef.current!.value;
    addNewHandler(newText);
  };

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    clearAllHandler();
  };

  const handleInputChange = (e: React.FormEvent) => {
    e.preventDefault();
    setIsInputValidated(textInputRef.current!.value.length > 0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">New Item:</label>
        <input id="todo-text" type="text" ref={textInputRef} onChange={handleInputChange} />
      </div>
      <div className="form-buttons">
        <button onClick={handleClear} disabled={toDoCount === 0}>
          CLEAR ALL
        </button>
        <button type="submit" disabled={!isInputValidated}>
          ADD
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
