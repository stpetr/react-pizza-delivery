const express = require('express')
const multer = require('multer')
const Product = require('../models/product')
const { getMulter, getImageFilter } = require('../utils/multer')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/admin/products', auth, async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()

        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e.message)
    }
})

router.patch('/admin/products/:id', auth, async (req, res) => {
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

const productImageUpload = multer({ ...getImageFilter(500 * 1024) })

router.post('/admin/products/:id/image', auth, productImageUpload.single('image'), async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).send()
        }

        product.image = req.file.buffer
        await product.save()

        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.delete('/admin/products/:id', auth, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
