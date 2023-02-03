import express from "express";
import database from "./database";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(5050, () => {
  console.log("Express listening on http://localhost:5050");
  if (database.getConnection() == null) {
    console.error("Database connection failed");
    process.exit(1);
  }
  console.log(
    "Database connected.\nExpress listening on http://localhost:5050"
  );
});
