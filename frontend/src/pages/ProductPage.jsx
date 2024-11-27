import { useFetch } from "../hooks/useField-fetch"
import { useParams } from "react-router-dom"

const ProductPage = ( ) => {
    const { id } = useParams()
    const { data: product, loading, error } = useFetch(`http://localhost:5000/api/products/${id}`)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!product) return <div>Product not found</div>

    const { image, name, price, description } = product
    const sizes =["XS", "S", "M", "L", "XL"]

    const handleSizeSelect = (size) => {
      setSelectedSize(size)
    }

    return (
    <div className="container mx-auto max-w-6xl py-32">
      <div className="flex gap-16">
        {/* Product Image */}
        <img 
          src={image}
          alt={name}
          className="h-[80vh] max-w-[70vh] object-cover transition-transform duration-300 rounded-md"    
        />  
        {/* Product Details */}
        <div className="w-1/2 pt-8 space-y-6">
          <h3 className="text-3xl font-semibold">{name}</h3>
          <p className="text-xl font-bold mt-2">${price.toFixed(2)}</p>
          <div className="border-b border-gray-500"></div>
          <p className="text-gray-600 font-bold">Fabric Content:</p>
          <p className="text-black whitespace-pre-wrap">{description}</p>
          <p className="text-gray-600 pt-28">Color: Black</p>
          <p className="text-gray-600 pt-2">Size: </p>
        </div>
      </div>
    </div>
    )
}

export default ProductPage