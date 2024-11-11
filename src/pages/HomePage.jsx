import { useFetch } from "../hooks/hooks"
import ProductCard from "../components/ProductCard"

const HomePage = () => {
    const { data: products, loading, error } = useFetch('http://localhost:3000/products') 

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return(
        <div>       
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    )
}

export default HomePage