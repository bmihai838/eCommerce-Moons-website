const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

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

router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    subCategory: req.body.subCategory,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image
  })

  try {
    const newProduct = await product.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(400).json({ messaage: error.message })
  }
})

module.exports = router