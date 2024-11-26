import { useProducts } from "../hooks/useProducts";
import AdminProductCard from "../components/AdminProductCard";
import { useState } from "react";

const emptyProduct = {
  image: '',
  name: '',
  price: 0,
  description: '',
  category: '',
  subCategory: ''
}

const AdminPage = () => {
  const { data: products, loading, error, refetch } = useProducts()
  const [showCreateForm, setShowCreateForm] = useState(false)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="container mx-auto pt-36">
      <h1 className="flex text-2xl font-bold justify-center items-center mb-10 underline">
        Product Management
        </h1>
        <div className="mb-8 flex items-center mx-5">
          <button 
            onClick={() => setShowCreateForm(true)}
            className="bg-black text-white p-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Create New Product
          </button>
          
        </div>

        {/* Create Form */}
        {showCreateForm && (
          <div className="mb-8 max-w-md mx-auto">
            <AdminProductCard
              product={emptyProduct}
              onEdit={() => {
                setShowCreateForm(false)
                refetch()
              }}
              isCreating={true}
              onCancel={() => setShowCreateForm(false)}
            />
          </div>
        )}
    
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