const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./db/db");
const router = require("./routes/routes");
const morgan = require("morgan");
const cors = require("cors");
const corsOption = {};
db.connectMongoDB();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/", router);
app.listen(PORT, () => {
  console.log(PORT, "service is running");
});
