import { useFetch } from "../hooks/hooks"
import { useParams } from "react-router-dom"

const ProductPage = ( ) => {
    const { id } = useParams()
    const { data: product, loading, error } = useFetch(`http://localhost:3000/products/${id}`)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!product) return <div>Product not found</div>

    const { imageUrl, name, price, description } = product

    return (
    <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg max-w-sm mb-36">
        {/* Product Image */}
          <img 
            src={`/${product.imageUrl}`}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-md"    
          />  
        </div>
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price.toFixed(2)}</p>
        </div>

    </div>
    
    )
}

export default ProductPage