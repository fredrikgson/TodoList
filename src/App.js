import { useEffect, useState } from "react";
import AddItemForm from "./components/AddItemForm";
import TodoList from "./components/TodoList";
import "./style.css";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList));
  }, [todoList]);

  const addTodoItem = (title) => {
    setTodoList((todos) => {
      return [
        ...todos,
        {
          id: crypto.randomUUID(),
          title: title,
          archived: false,
        },
      ];
    });
  };

  const toggleArchived = (id, archived) => {
    setTodoList((currentTodoList) => {
      return currentTodoList.map((item) => {
        if (item.id === id) {
          return { ...item, archived };
        }
        return item;
      });
    });
  };

  const deleteItem = (id) => {
    setTodoList((currentTodoList) => {
      return currentTodoList.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="page">
      <div className="wrapper">
        <h1>TODO LIST</h1>
        <AddItemForm onSubmit={addTodoItem} />
        <hr />
        <TodoList
          todoList={todoList}
          toggleArchived={toggleArchived}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default App;
