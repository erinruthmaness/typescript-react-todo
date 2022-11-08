import React, { useState } from "react";
import { ToDoForm, ToDoList } from "./components";
import { ToDoModel } from "./models";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDoModel[]>([]);

  const handleNew = (text: string) => {
    setTodos((prevState) => [...prevState, { text, id: `item-${prevState.length.toString()}` }]);
  };

  const handleClearItem = (id: string) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <ToDoForm
        key={`form-${todos.length}`}
        addNewHandler={handleNew}
        clearAllHandler={handleClear}
        toDoCount={todos.length}
      />
      <ToDoList key={`list-${todos.length}`} items={todos} clearItemHandler={handleClearItem} />
    </div>
  );
};

export default App;
