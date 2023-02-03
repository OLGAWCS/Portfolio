import express from "express";
import database from "./database";
import helmet from "helmet";
import cors from "cors";
const contactRouter = require("./contactRouter");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.get("/", (req, res) => {
  res.send("Hello there!");
});


app.use("/", contactRouter);
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

