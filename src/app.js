// Import library
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");
const cors = require("cors");
const router = require("./routes/routes");

// declaration variable
const port = process.env.PORT || 3000;
const app = express();
const formData = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("combined"));
// for handling multipart
app.use(formData.array());

app.use(`/api/v1/products`, router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
