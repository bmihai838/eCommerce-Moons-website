import { useFetch } from './useField-fetch';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'

export const useProducts = (category, subcategory) => {

  const url = category 
    ? `${API_URL}/products/category/${category}${subcategory ? `/${subcategory}` : ''}`
    : `${API_URL}/products`

  const { data, loading, error, refetch } = useFetch(url)

  const transformedData = data?.map(product => ({
    ...product,
    id: product._id,
    _id: undefined
  }))
    
  return { data: transformedData, loading, error, refetch } 
}

export const useAddProduct = () => {
  const addProduct = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (err) {
        throw err.message
    }
  }

  return { addProduct }
}

export const useUpdateProduct = () => {
  const updateProduct = async (id, formData) => {
    try {
      const response = await axios.put(`${API_URL}/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (err) {
      throw err.message
    }
  }

  return { updateProduct }
}

export const useDeleteProduct = () => {
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/products/${id}`)
    } catch (err) {
      throw err.message
    }
  }

  return { deleteProduct }
}