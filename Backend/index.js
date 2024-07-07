const express = require("express");
const dotenv = require("dotenv");
const bookroute = require("./routes/book");
const userroute = require("./routes/user");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 4000;

const database = require("./config/database");
database();

app.use("/book", bookroute);
app.use("/user", userroute);



//deployment


app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
