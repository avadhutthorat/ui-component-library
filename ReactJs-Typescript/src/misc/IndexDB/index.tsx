// todo app
import "./style.css";
import { useState } from "react";
import { useTodos } from "./useTodos";
import { addTodo, getTodos } from "./todo-api";

export default function Todo() {
  const todos = useTodos();
  const [inputValue, setInputValue] = useState("");

  console.log({
    todos,
  });

  const addTodoHandler = async () => {
    const todo = {
      id: Date.now() + "2",
      title: inputValue,
      done: false,
    };

    await addTodo(todo);
  };
  return (
    <div>
      <label id="todo">Enter todo</label>
      <input
        type="text"
        value={inputValue}
        name="todo"
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          border: "1px solid black",
        }}
      />
      <button type="submit" onClick={addTodoHandler}>
        Add
      </button>
      <div>
        <div>List of Todos</div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
