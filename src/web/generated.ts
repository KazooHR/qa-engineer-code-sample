import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String'];
  todos: TodoConnection;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: TodoMutationResult;
  updateTodo: TodoMutationResult;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type TodoMutationResult = {
  __typename?: 'TodoMutationResult';
  errors?: Maybe<Array<Scalars['String']>>;
  todos: TodoConnection;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  totalCount: Scalars['Int'];
};

export type TodoEdge = {
  __typename?: 'TodoEdge';
  cursor: Scalars['String'];
  node: Todo;
};

export type TodoConnection = {
  __typename?: 'TodoConnection';
  pageInfo: PageInfo;
  edges: Array<TodoEdge>;
};

export type CreateTodoInput = {
  todo: Scalars['String'];
  complete?: Maybe<Scalars['Boolean']>;
};

export type UpdateTodoInput = {
  id: Scalars['String'];
  todo?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
};

export type Todo = {
  __typename?: 'Todo';
  deleted: Scalars['Boolean'];
  id: Scalars['String'];
  todo: Scalars['String'];
  complete: Scalars['Boolean'];
};

export type NewTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type NewTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'TodoMutationResult' }
    & Pick<TodoMutationResult, 'errors'>
    & { todos: (
      { __typename?: 'TodoConnection' }
      & { pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'totalCount'>
      ), edges: Array<(
        { __typename?: 'TodoEdge' }
        & Pick<TodoEdge, 'cursor'>
        & { node: (
          { __typename?: 'Todo' }
          & Pick<Todo, 'id' | 'complete' | 'todo'>
        ) }
      )> }
    ) }
  ) }
);

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo: (
    { __typename?: 'TodoMutationResult' }
    & Pick<TodoMutationResult, 'errors'>
    & { todos: (
      { __typename?: 'TodoConnection' }
      & { pageInfo: (
        { __typename?: 'PageInfo' }
        & Pick<PageInfo, 'totalCount'>
      ), edges: Array<(
        { __typename?: 'TodoEdge' }
        & Pick<TodoEdge, 'cursor'>
        & { node: (
          { __typename?: 'Todo' }
          & Pick<Todo, 'id' | 'todo' | 'complete' | 'deleted'>
        ) }
      )> }
    ) }
  ) }
);

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: (
    { __typename?: 'TodoConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'totalCount'>
    ), edges: Array<(
      { __typename?: 'TodoEdge' }
      & Pick<TodoEdge, 'cursor'>
      & { node: (
        { __typename?: 'Todo' }
        & Pick<Todo, 'id' | 'todo' | 'complete' | 'deleted'>
      ) }
    )> }
  ) }
);


export const NewTodoDocument = gql`
    mutation NewTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    errors
    todos {
      pageInfo {
        totalCount
      }
      edges {
        cursor
        node {
          id
          complete
          todo
        }
      }
    }
  }
}
    `;
export type NewTodoMutationFn = Apollo.MutationFunction<NewTodoMutation, NewTodoMutationVariables>;

/**
 * __useNewTodoMutation__
 *
 * To run a mutation, you first call `useNewTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newTodoMutation, { data, loading, error }] = useNewTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNewTodoMutation(baseOptions?: Apollo.MutationHookOptions<NewTodoMutation, NewTodoMutationVariables>) {
        return Apollo.useMutation<NewTodoMutation, NewTodoMutationVariables>(NewTodoDocument, baseOptions);
      }
export type NewTodoMutationHookResult = ReturnType<typeof useNewTodoMutation>;
export type NewTodoMutationResult = Apollo.MutationResult<NewTodoMutation>;
export type NewTodoMutationOptions = Apollo.BaseMutationOptions<NewTodoMutation, NewTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    errors
    todos {
      pageInfo {
        totalCount
      }
      edges {
        cursor
        node {
          id
          todo
          complete
          deleted
        }
      }
    }
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const TodosDocument = gql`
    query Todos {
  todos {
    pageInfo {
      totalCount
    }
    edges {
      cursor
      node {
        id
        todo
        complete
        deleted
      }
    }
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;