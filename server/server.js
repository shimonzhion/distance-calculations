const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8090;

const apiRouter = require("./routes/route");

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
