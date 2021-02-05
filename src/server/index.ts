import express from "express";
import path from "path";

const app = express();
const port = 3000;

// All other routes, serve up our index.html
const pathToIndex = path.resolve(__dirname, "../../dist/index.html");
app.use((req, res) => {
  res.sendFile(pathToIndex);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
