import { useFetch } from "../hooks/useField-fetch"
import ProductCard from "../components/ProductCard"
import { useProducts } from "../hooks/useProducts"

const HomePage = () => {
    const { data: products, loading, error } = useProducts()

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return(
      <div className="container mx-auto p-4 pt-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">       
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    )
}

export default HomePage