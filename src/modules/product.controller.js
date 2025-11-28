import { Product_Model } from '../../DB/models/Product.model.js'
export const createProduct = async (req, res) =>
{
    try
    {
        // const { name, price, category } = req.body;
        const newProduct= await Product_Model.create(req.body);
        res.status(201).json({ message: "Product created successfully",newProduct });
    }
    catch (error)
    {
        res.status(500).json({ message: "Product creation failed", error });
    }
}
export const getProducts = async (req, res) =>
{
    try
    {
        const Products = await Product_Model.find({});
        res.status(200).json({ message: "Products retrieved successfully", Products });
    }
    catch (error)
    {
        res.status(500).json({ message: "Products retrieval failed", error });
    }
}
export const updateProduct = async (req, res) =>
{
    try
    {
        const { id, name, price, category } = req.body;
        const updatedProduct = await Product_Model.findByIdAndUpdate(id,{ name, price, category },{ new: true });
        res.status(200).json({ message: "Product updated successfully", updatedProduct });
    }
    catch (error)
    {
        res.status(500).json({ message: "Product update failed", error });
    }
}
export const deleteProduct = async (req, res) =>
{
    try
    {
        const  id= req.params.id;
        const deletedProduct = await Product_Model.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    }
    catch (error)
    {
        res.status(500).json({ message: "Product deletion failed", error });
    }
}