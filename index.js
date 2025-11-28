import express from "express";
import productRouter from "./src/modules/product.route.js";
import { connectDB } from "./DB/connection.js";
import cors from "cors";
connectDB();
const app = express();
const port = process.env.PORT || 4444;
app.use(cors());
app.use(express.json());
app.use("/products", productRouter)
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
