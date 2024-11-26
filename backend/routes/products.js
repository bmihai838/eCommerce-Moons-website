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

router.get('/category/:category/:subcategory?', async (req, res) => {
  try {
    const query = {
      category: req.params.category.toUpperCase()
    }

    if (req.params.subcategory) {
      query.subCategory = req.params.subcategory.toLowerCase()
    }

    const products = await Product.find(query)
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


router.get('/:id', async (req, res) => {
  try {
    const productId = req.params.id
    const product = await Product.findById(productId)

    if (!product) {
      console.error(`Product with ID ${productId} not found`)
      return res.status(404).json({ message: 'Product not found' })
    }
    res.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    res.status(500).json({ message: error.message })
  }
})

router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const updateData = { ...req.body }

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updateData.image = result.secure_url
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );
    
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }
    
    res.json(updatedProduct);
  } catch (error) {
    console.error('Update error:', error);
    res.status(400).json({ message: error.message })
  }
})

router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload an image'})
    }

    const result = await cloudinary.uploader.upload(req.file.path)
    
    const product = new Product({
      ...req.body,
      subCategory: req.body.subCategory.toLowerCase()
    })

    const newProduct = await product.save()
    res.status(201).json(newProduct)
  } catch (error) {
    console.error('Error creating product:', error)
    res.status(400).json({ messaage: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  console.log('Delete request for id:', req.params.id)
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Products not found' })
    }
    res.status(200).json({ message: 'Product deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router