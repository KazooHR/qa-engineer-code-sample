import * as knex from "knex";

interface Entities {
  todo: {
    id: string;
    todo: string;
    complete: boolean;
  };
}

export function getRawConnection<T = any>() {
  const connection = process.env.DB_CONNECTION;

  if (!connection) {
    throw new Error(
      "Database connection not found in environment. Did you copy `env.example` to .env?"
    );
  }

  return knex<T>(connection);
}

export function getConnection<Entity extends keyof Entities>(entity: Entity) {
  return getRawConnection<Entities[Entity]>()(entity);
}
