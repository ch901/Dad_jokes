require("dotenv").config();

const express = require("express");
const router = require("./routes");

const app = express();

const PORT = 5050;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
