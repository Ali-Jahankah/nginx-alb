import express from "express";
import * as path from "path";

const app = express();
require("dotenv").config();
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to server -- 1 --" });
});

const port = process.env.PORT || process.env.NX_PUBLIC_SERVER_1_PORT;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
