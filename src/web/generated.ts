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
  id: Scalars['String'];
  todo: Scalars['String'];
  complete: Scalars['Boolean'];
};

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
        & Pick<Todo, 'id' | 'todo' | 'complete'>
      ) }
    )> }
  ) }
);


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