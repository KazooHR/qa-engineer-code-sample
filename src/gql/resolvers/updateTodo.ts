import { getConnection, Entities } from "../db";
import { getTodoConnectionResolver } from "./getTodoConnectionResolver";

interface TodoInput {
  id: string;
  todo?: string;
  complete?: boolean;
  deleted?: boolean;
}

export async function updateTodo(parent: unknown, args: { input: TodoInput }) {
  try {
    const propsToUpdate: Partial<Entities["todo"]> = {};

    if (args.input.complete !== undefined) {
      propsToUpdate.complete = args.input.complete;
    }

    if (args.input.todo !== undefined) {
      propsToUpdate.todo = args.input.todo;
    }

    if (args.input.deleted !== undefined) {
      propsToUpdate.deleted = args.input.deleted;
    }

    await getConnection("todo")
      .update(propsToUpdate)
      .where("id", "=", args.input.id);

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
