import { useFetch } from "../hooks/hooks"
import ProductCard from "../components/ProductCard"

const HomePage = () => {
    const { data: products, loading, error } = useFetch('http://localhost:3000/products') 

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return(
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">       
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    )
}

export default HomePage