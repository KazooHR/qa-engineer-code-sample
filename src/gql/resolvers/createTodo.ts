import { getConnection } from "../db";
import { getTodoConnectionResolver } from "./getTodoConnectionResolver";

interface TodoInput {
  todo: string;
  complete?: boolean;
}

export async function createTodo(parent: unknown, args: { input: TodoInput }) {
  const todoConnection = getConnection("todo");
  try {
    await todoConnection.insert(args.input);
    return {
      errors: [],
      todos: getTodoConnectionResolver(todoConnection),
    };
  } catch (e) {
    return {
      errors: [],
      todos: getTodoConnectionResolver(todoConnection),
    };
  }
}
