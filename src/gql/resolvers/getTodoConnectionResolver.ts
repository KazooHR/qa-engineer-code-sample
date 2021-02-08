import { getConnection } from "../db";

interface Todo {
  id: string;
  todo: string;
  deleted: boolean;
  complete: boolean;
}

export async function getTodoConnectionResolver(): Promise<{
  pageInfo: {
    totalCount: number;
  };
  edges: {
    cursor: string;
    node: Todo;
  }[];
}> {
  const todos = await getConnection("todo")
    .select("*")
    .where("deleted", "=", false);
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
