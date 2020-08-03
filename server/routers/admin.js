const express = require('express')
const Product = require('../models/product')
const { getMulter, getImageFilter } = require('../utils/multer')

const router = new express.Router()

router.post('/admin/products', async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()

        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.patch('/admin/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

const productImageUpload = getMulter('products', { ...getImageFilter(500 * 1024) })

router.patch('/admin/products/:id/image', productImageUpload.single('image'), async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).send()
        }

        product.image = req.file.filename
        await product.save()

        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.delete('/admin/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
