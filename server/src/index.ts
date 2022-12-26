import express from "express";
import router from "./upload";
import cors from "cors";
// const bodyParser = require("body-parser")

const app = express();
app.use(cors());
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//     limit: "1024mb",
//   })
// );
app.get("/", (req, res) => {
  res.json("hello world");
});
app.use("/upload", router);

app.listen(8080, () => {
  console.log("启动成功");
});
