import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";     

const ProductCard = ({ product }) => {
    const { image, name, price, id, description } = product
    const dispatch = useDispatch()

    const handleAddToCart = () => {
      console.log('Adding to card with image:', image)
      dispatch(cartActions.addToCart({
          id,
          name,
          price,
          image
      }))
    }

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
          <p className="text-md font-semibold mt-2">${price.toFixed(2)}</p>
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
            onClick={handleAddToCart}
            className="py-2 w-1/2 bg-black text-white text-center rounded-md border-2 border-transparent hover:bg-white hover:text-black hover:border-gray-500 shadow-md transition-colors"
          >
            Add to Cart
          </button>
        </div>    
      </div>    
    )            
}           

export default ProductCard