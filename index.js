const express = require("express");
const cors = require("cors");
const { query } = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
