import * as React from "react";

import { useTodosQuery } from "../generated";

function ConnectedTodos() {
  const { loading, data } = useTodosQuery();

  if (loading) {
    return <div data-testid="loading">Loading...</div>;
  }

  return (
    <ul data-testid="todos-list">
      {data?.todos.edges.map((todo) => (
        <li key={todo.cursor} data-testid={`todo-${todo.node.id}`}>
          {todo.node.todo}
        </li>
      ))}
    </ul>
  );
}

export function Todos() {
  return (
    <div>
      <h2>Todos</h2>
      <ConnectedTodos />
    </div>
  );
}
