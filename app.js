// Import library
import Express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import multer from "multer";
import cors from "cors";
import router from "./src/routes/routes";

// declaration variable
const port = process.env.PORT || 3000;
const app = Express();
const formData = multer();
const prefix = "/api/v1";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("combined"));
// for handling multipart
app.use(formData.array());

app.use(`${prefix}/`, router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
