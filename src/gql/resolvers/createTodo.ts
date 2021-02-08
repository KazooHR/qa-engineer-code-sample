import { ulid } from "ulid";

import { getConnection } from "../db";
import { getTodoConnectionResolver } from "./getTodoConnectionResolver";

interface TodoInput {
  todo: string;
  complete?: boolean;
}

export async function createTodo(parent: unknown, args: { input: TodoInput }) {
  try {
    await getConnection("todo").insert({
      id: ulid(),
      complete: Boolean(args.input.complete),
      todo: args.input.todo,
    });
    return {
      errors: [],
      todos: getTodoConnectionResolver(),
    };
  } catch (e) {
    return {
      errors: [e.message],
      todos: getTodoConnectionResolver(),
    };
  }
}
