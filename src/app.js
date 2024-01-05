// Import library
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");

const cors = require("cors");

// own library
const product = require("./routes/product.routes");
const category = require("./routes/category.routes");
const upload = require("./routes/upload.routes");

// declaration variable
const port = process.env.PORT || 3000;
const app = express();

const prefix = "/api/v1";

// middleware

app.use(bodyParser.json());
app.use(multer().array());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("combined"));

// route
app.use(`${prefix}/products`, product);
app.use(`${prefix}/categories`, category);
app.use(`${prefix}/upload`, upload);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
