// Import library
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");
const cors = require("cors");
const product = require("./routes/product.routes");
const category = require("./routes/category.routes");

// declaration variable
const port = process.env.PORT || 3000;
const app = express();
const formData = multer();

const prefix = "/api/v1";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("combined"));
// for handling multipart
app.use(formData.array());

app.use(`${prefix}/products`, product);
app.use(`${prefix}/categories`, category);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
