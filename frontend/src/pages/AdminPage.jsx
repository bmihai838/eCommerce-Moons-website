import { useProducts } from "../hooks/useProducts";
import AdminProductCard from "../components/AdminProductCard";

const AdminPage = () => {
  const { data: products, loading, error, refetch } = useProducts()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="container mx-auto p-4 pt-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {products?.map((product) => (
          <AdminProductCard 
            key={product.id} 
            product={product}
            onDelete={refetch}
            onEdit={refetch}
          />
        ))}
      </div>
    </div>

    )
  }

  export default AdminPage