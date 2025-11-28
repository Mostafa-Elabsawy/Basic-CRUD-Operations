import { Router } from "express";
import * as productController from "./product.controller.js";
const productRouter = Router();
productRouter.post("/", productController.createProduct);
productRouter.get("/", productController.getProducts);
productRouter.put("/", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);
export default productRouter;