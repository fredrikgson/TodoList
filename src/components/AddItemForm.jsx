import { useState } from "react";

const AddItemForm = ({onSubmit}) => {

    const [formInput, setFormInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formInput.trim() === "") return;
        onSubmit(formInput);
        setFormInput("");
      };

    return (
        <form 
        className="todo-form" 
        onSubmit={handleSubmit}
        autoComplete="off"
        >
        <input
        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
        type="text"
        id="item-input"
        placeholder="Enter a new todo list item"
        />
        <button id="add-item-button">Add</button>
    </form>
  );
}
export default AddItemForm;