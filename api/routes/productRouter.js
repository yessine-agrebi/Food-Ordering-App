import express from "express";
import Product from "../models/productModel.js"
const router = express.Router();


router.get('/product', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({data: products})
    } catch (error) {
        res.status(400).send({data: {error: error.message}})
    }
});



export default router;