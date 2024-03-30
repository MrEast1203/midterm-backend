import express from "express";
const port = process.env.PORT || 8000;
const app = express();
app.use("/", (req, res) => {
  res.send("Server is up and running");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
