const express = require('express')
const Product = require('../models/product')

const router = new express.Router()

router.get('/api/products', async (req, res) => {
    const products = await Product.find({ isActive: true }).exec()
    res.send(products)
})

router.get('/api/product/:id/image', async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(404).send()
    }
    res.set('Content-Type', 'image/jpg')
    res.send(product.image)
})

module.exports = router
