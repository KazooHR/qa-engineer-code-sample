import * as React from "react";

import { useTodosQuery } from "../generated";
import { NewTodo } from "../NewTodo";
import { Todo } from "../Todo";

function ConnectedTodos() {
  const { loading, data } = useTodosQuery();

  if (loading) {
    return <div data-testid="loading">Loading...</div>;
  }

  return (
    <div>
      <ul data-testid="todos-list">
        {data?.todos.edges.map((todo) => (
          <Todo key={todo.cursor} todo={todo.node} />
        ))}
      </ul>
      <NewTodo />
    </div>
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
