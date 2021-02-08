import { getConnection } from "../db";

interface Todo {
  id: string;
  todo: string;
  deleted: boolean;
  complete: boolean;
}

export async function getTodoConnectionResolver(
  includeDeleted: boolean = false
): Promise<{
  pageInfo: {
    totalCount: number;
  };
  edges: {
    cursor: string;
    node: Todo;
  }[];
}> {
  const todosPromise = getConnection("todo").select("*");

  if (!includeDeleted) {
    todosPromise.where("deleted", "=", false);
  }

  const todos = await todosPromise;

  return {
    pageInfo: {
      totalCount: todos.length,
    },
    edges: todos.map((todo) => ({
      cursor: todo.id,
      node: todo,
    })),
  };
}
