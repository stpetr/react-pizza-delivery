const express = require('express')
const Product = require('../models/product')

const router = new express.Router()

router.get('/api/products', async (req, res) => {
    const products = await Product.find({ isActive: true }).exec()
    res.send(products)
})

module.exports = router
