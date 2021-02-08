import { getTodoConnectionResolver } from "./getTodoConnectionResolver";

export async function todos() {
  return getTodoConnectionResolver();
}
