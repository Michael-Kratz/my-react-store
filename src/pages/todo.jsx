import { useState } from "react";
import "./todo.css";

function Todo() {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState({
    text: "",
  });

  function handleInput(e) {
    let text = e.target.value;
    let name = e.target.name;

    let copy = { ...items };
    copy[name] = text;
    setItems(copy);
  }

  function save() {
    console.log(items);

    let copy = [...allItems];
    copy.push(items);
    setAllItems(copy);
  }

  return (
    <div className="todo">
      <h1>My Shopping List</h1>

      <div className="todo-form">
        <label className="form-label">Shopping</label>
        <input
          onBlur={handleInput}
          name="text"
          type="text"
          className="todo-input"
        />
      </div>
      <div className="controls">
        <button onClick={save} className="btn-save button-36">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {allItems.map((i) => (
          <li>{i.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
