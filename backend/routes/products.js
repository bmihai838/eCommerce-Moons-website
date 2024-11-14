const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const upload = require('../middleware/upload')
const cloudinary = require('../config/cloudinary')

router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category.toUpperCase() })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.json(updatedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.post('/', upload.single('image'), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path)

  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    subCategory: req.body.subCategory,
    price: req.body.price,
    description: req.body.description,
    image: result.secure_url
  })

  try {
    const newProduct = await product.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(400).json({ messaage: error.message })
  }
})

module.exports = router