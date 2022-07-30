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

router.get('/products-by-categories', async (req, res) => {
    try {
        const products = await Product.aggregate([
            {$match: {}},
            {$group: {
                _id: '$category',
                products: {$push: '$$ROOT'}
            }},
            {$project: {name: '$_id', products: 1, _id: 0}},
        ]);
        res.status(200).send({data: products})
    }catch(err){
        res.status(400).send({data: {error: err.message}})
    }
})



export default router;