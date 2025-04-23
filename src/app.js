import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}`);
});

export default app;
