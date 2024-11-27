import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";


const ProductGrid = ({ category, subcategory, title }) => {
  const { data: products, loading, error } = useProducts(category, subcategory)
  
  const displaySubcategory = subcategory ===  'shirt' ? 'shirts' : subcategory

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="max-w-full container mx-auto px-8 p-4 pt-28">
      {title && ( 
        <h1 className="text-center p-8 pb-11 font-semibold text-3xl">
          {`${title}${displaySubcategory ? `'S ${displaySubcategory.toUpperCase()}` : "" }`}
        </h1>
      )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6  place-items-center">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
  )
}

export default ProductGrid