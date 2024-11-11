import { Link } from "react-router-dom";
     
const ProductCard = ({ product }) => {

    return (            
      <div>
        {/* Product Image */}
          <img 
            src={imageUrl}
            alt={name}
            className=""    
          />        

        {/* Product Details */}
        <h3>{name}</h3>
        <p>Description</p>
        <p>{price.toFixed(2)}</p>

        {/* Action Buttons */}
        <div>
          <Link
            to={`/product/${id}`}
            className=""
          >
            View Details
          </Link>
          <button
            onClick={() => console.log('Add to Cart:', product)}
          >
            Add to Cart
          </button>
        </div>    
      </div>    
    )            
}           

export default ProductCard