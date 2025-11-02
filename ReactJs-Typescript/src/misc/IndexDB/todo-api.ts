import { db, type Todo } from "./db";

export async function addTodo(input: Omit<Todo, "createdAt">) {
  const todos: Todo = { ...input, createdAt: Date.now() };
  return db.todos.put(todos);
}

export async function getTodos() {
  return db.todos.orderBy("createdAt").toArray();
}
