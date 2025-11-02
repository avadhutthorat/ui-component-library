import Dexie, { type Table } from "dexie";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
}

class DBConn extends Dexie {
  todos!: Table<Todo, string>;

  constructor() {
    super("app-db");

    this.version(1).stores({
      todos: "&id, done, createdAt",
    });
  }
}

export const db = new DBConn();
