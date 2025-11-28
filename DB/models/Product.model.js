import { Schema, model } from 'mongoose';
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});
export const Product_Model = model('Product', productSchema);