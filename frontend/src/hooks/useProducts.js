import { useFetch } from './useField-fetch';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'

export const useProducts = (category) => {
  const url = category 
    ? `${API_URL}/products/${category}`
    : `${API_URL}/products`

  const { data, loading, error } = useFetch(url)

  const transformedData = data?.map(product => ({
    ...product,
    id: product._id,
    _id: undefined
  }))
    
  return { data: transformedData, loading, error } 
}

export const useAddProduct = () => {
  const addProduct = async (productData) => {
    try {
      const response = await axios.post(`${API_URL}/products`, productData)
      return response.data
    } catch (err) {
      throw err.message
    }
  };

  return { addProduct }
}