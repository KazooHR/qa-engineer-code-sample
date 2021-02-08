import { getRawConnection } from "../src/gql/db";

async function safeRawQuery(
  connection: ReturnType<typeof getRawConnection>,
  query: string
): Promise<void> {
  return new Promise((resolve) => {
    try {
      connection.raw(query).then((result) => {
        resolve();
      });
    } catch (e) {
      console.error(e.message);
      resolve();
    }
  });
}

(async () => {
  const connection = getRawConnection();
  console.log("Cleaning up existing schema");
  await safeRawQuery(connection, "DROP SCHEMA IF EXISTS public CASCADE");
  console.log("Creating schema");
  await safeRawQuery(connection, "CREATE SCHEMA IF NOT EXISTS public");
  connection.destroy();
})();
