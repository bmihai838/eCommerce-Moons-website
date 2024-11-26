const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const productRoutes = require('./routes/products')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// MongoDB Conection

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Routes

app.use('/api/products', productRoutes)


// Test Route

app.get('/test', (req, res) => {
  console.log('Received request to /test')
  res.json({ message: "Server is working" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
