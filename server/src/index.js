require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
const models = require("./models/models.js");
const cors = require("cors");
const router = require("./routes/index.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const start = async () => {
  try {
    sequelize.authenticate();
    sequelize.sync();
    app.listen(process.env.PORT, () =>
      console.log(`Server started on ${process.env.PORT} port`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
