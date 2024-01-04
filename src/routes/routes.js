import Express from "express";
import {
  getAllProducts,
  createProduct,
  detailProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

const router = Express.Router();

router.get("products", getAllProducts);
router.post("products", createProduct);
router.get("products/:id", updateProduct);
router.delete("products/:id", deleteProduct);
router.get("products/:id", detailProduct);

export default router;
