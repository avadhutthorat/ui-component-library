import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";

export const useTodos = () => {
  const todos = useLiveQuery(
    () => db.todos.orderBy("createdAt").toArray(),
    [],
    []
  );

  return todos;
};
