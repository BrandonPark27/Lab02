const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const lab02_router = require("./Route");
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
//adding route files
app.use("/lab02",lab02_router);
 
app.get("/", (req, res) => {
  res.send("Hello to base server");
});
 
 
app.use("", (req, res) => {
  res.send("PAGE NOT FOUND");
});
 
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});