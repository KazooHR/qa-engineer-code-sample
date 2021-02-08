import knex from "knex";

interface Todo {
  id: string;
  todo: string;
  complete: boolean;
}

export async function getTodoConnectionResolver(
  connection: knex.QueryBuilder<Todo, Todo[]>
): Promise<{
  pageInfo: {
    totalCount: number;
  };
  edges: {
    cursor: string;
    node: Todo;
  }[];
}> {
  const todos = await connection.select("*");
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
