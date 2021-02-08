import * as React from "react";

import { useNewTodoMutation, TodosDocument } from "../generated";

export function NewTodo() {
  const [createTodo] = useNewTodoMutation();
  const [todo, setTodo] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function submit() {
    setLoading(true);
    createTodo({
      variables: {
        input: {
          todo,
          complete: false,
        },
      },
      refetchQueries: [{ query: TodosDocument }],
    }).then(() => {
      setTodo("");
      setLoading(false);
    });
  }

  return (
    <form
      className={loading ? "loading" : ""}
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <input value={todo} onChange={(event) => setTodo(event.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}
