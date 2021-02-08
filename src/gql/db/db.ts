import * as knex from "knex";

export interface Entities {
  todo: {
    id: string;
    todo: string;
    deleted: boolean;
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

  return knex<T>({
    client: "pg",
    connection,
    pool: { min: 0, max: 7 },
  });
}

export function getConnection<Entity extends keyof Entities>(entity: Entity) {
  return getRawConnection<Entities[Entity]>()(entity);
}
