const express = require("express");
const db = require("./utils/database");
const config = require("./config");
const initModels = require('./models/init.models');
const productsRouter = require("./products/products.router");

const app = express();

db.authenticate()
  .then(() => console.log("Autentication successfully"))
  .catch((err) => console.log(err))

db.sync()
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.log(err))  

initModels();

app.use(express.json());

app.get("/", (req, res) => {
  req.statusCode(200).json({ message: "Server OK!" });
});

app.use('/products',productsRouter);

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
