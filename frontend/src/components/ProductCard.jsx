import { Link } from "react-router-dom";
     
const ProductCard = ({ product }) => {

    const { image, name, price, id, description } = product

    return (            
      <div className="flex flex-col h-[480px]  mb-10 rounded-lg shadow-sm max-w-xs">
        {/* Product Image */}
        <div className="aspect-[3/4] w-full overflow-hidden">
          <Link to={`/products/${id}`}>
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-md"    
            />  
          </Link>
        </div>
                
        {/* Product Details */}
        <div className="text-center p-4">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
          <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/products/${id}`}
            className="py-2 flex-1 bg-white text-black text-center rounded-md border-2 border-gray-500 shadow-md "
          >
            View Details
          </Link>
          <button
            onClick={() => console.log('Add to Cart:', product)}
            className="py-2 w-1/2 bg-black text-white text-center rounded-md border-2 border-transparent hover:bg-white hover:text-black hover:border-gray-500 shadow-md transition-colors"
          >
            Add to Cart
          </button>
        </div>    
      </div>    
    )            
}           

export default ProductCard