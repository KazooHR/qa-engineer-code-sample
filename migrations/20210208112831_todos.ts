import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("todo", (table) => {
    table.string("id", 26).primary();
    table.text("todo").notNullable();
    table.boolean("complete").notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {}
