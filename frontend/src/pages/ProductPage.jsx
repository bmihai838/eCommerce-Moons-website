import { useFetch } from "../hooks/useField-fetch"
import { useParams } from "react-router-dom"

const ProductPage = ( ) => {
    const { id } = useParams()
    const { data: product, loading, error } = useFetch(`http://localhost:5000/api/products/${id}`)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!product) return <div>Product not found</div>

    const { image, name, price, description } = product

    return (
    <div className="flex rounded-lg max-w-md py-48 mx-48 items-center">
      {/* Product Image */}
      <img 
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-md"    
      />  
      <div className="text-center px-36">
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-bold mt-2">{price.toFixed(2)}</p>
      </div>
    </div>
    )
}

export default ProductPage