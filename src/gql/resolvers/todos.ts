import { getConnection } from "../db";
import { getTodoConnectionResolver } from "./getTodoConnectionResolver";

export async function todos() {
  const connection = getConnection("todo");
  return getTodoConnectionResolver(connection);
}
