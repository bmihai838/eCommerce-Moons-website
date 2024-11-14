import { Link } from "react-router-dom";
     
const ProductCard = ({ product }) => {

    const { image, name, price, id, description } = product

    return (            
      <div className="rounded-lg max-w-xs ">
        {/* Product Image */}
        <Link to={`/products/${id}`}>
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-md"    
          />  
        </Link>
                
        {/* Product Details */}
        <div className="text-center">
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-bold mt-2">{price.toFixed(2)}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Link
            to={`/products/${id}`}
            className="py-2 w-1/2 bg-white text-black text-center rounded-md border-2 border-gray-500 shadow-md mr-2"
          >
            View Details
          </Link>
          <button
            onClick={() => console.log('Add to Cart:', product)}
            className="py-2 w-1/2 bg-black text-white text-center rounded-md border-2 border-transparent hover:bg-white hover:text-black hover:border-gray-500 shadow-md"
          >
            Add to Cart
          </button>
        </div>    
      </div>    
    )            
}           

export default ProductCard