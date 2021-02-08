import * as React from "react";
import { debounce } from "lodash";

import { Todo, TodosDocument, useUpdateTodoMutation } from "../generated";

export function Todo({ todo }: { todo: Omit<Todo, "__typename"> }) {
  const [saving, setSaving] = React.useState(false);
  const [todoText, setTodo] = React.useState(todo.todo);
  const [complete, setComplete] = React.useState(todo.complete);

  const [updateTodo] = useUpdateTodoMutation();
  const deleteTodo = () =>
    updateTodo({
      variables: {
        input: {
          id: todo.id,
          todo: todoText,
          complete,
          deleted: true,
        },
      },
    });
  const save = React.useCallback(
    debounce(
      (
        id: string,
        todo: string,
        complete: boolean,
        deleted: boolean = false
      ) => {
        setSaving(true);
        updateTodo({
          variables: {
            input: {
              id,
              todo,
              complete,
              deleted,
            },
          },
          refetchQueries: [
            {
              query: TodosDocument,
            },
          ],
        }).then((result) => {
          setSaving(false);
        });
      },
      250
    ),
    []
  );

  React.useEffect(() => {
    save(todo.id, todoText, complete);
  }, [todo.id, todoText, complete]);

  if (todo.deleted) {
    return null;
  }

  return (
    <li key={todo.id} data-testid={`todo-${todo.id}`}>
      <input
        type="checkbox"
        defaultChecked={complete}
        onChange={(event) => setComplete(event.target.checked)}
      />
      {complete ? (
        <>
          <span className="complete" data-testid="complete">
            {todoText}
          </span>
          <button data-testid="delete-todo" type="button" onClick={deleteTodo}>
            Delete
          </button>
        </>
      ) : (
        <input
          type="text"
          defaultValue={todoText}
          onChange={(event) => setTodo(event.target.value)}
        />
      )}
      {!saving ? null : <span>Saving...</span>}
    </li>
  );
}
