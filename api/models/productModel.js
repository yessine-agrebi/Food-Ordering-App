import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {type: 'string', required: true}
});


const ProductSchema = new Schema({
    name: {type: 'string', required: true},
    adjective: {type: 'string', required: true},
    description: {type: 'string', required: true},
    price: {type: 'string', required: true},
    category: {type: 'string', required: true},
});


const Product = mongoose.model('Product', ProductSchema);

export default Product;