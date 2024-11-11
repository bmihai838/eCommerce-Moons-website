import { Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 shadow-md">
      <div className="px-4 py-3 flex justify-between items-center">
        {/* Left side - Logo */}
        
          <Link to="/" className="font-bold text-xl text-white flex items-center gap-2">
            <img src="/assets/logo/moon2.webp" alt="Moons" 
              className="w-auto h-20 md:h-24 rounded-md"
            />
          </Link>

        {/* Right side */}
        <div className="flex gap-10 md:gap-8 items-center">
          <Link to="/cart" className="flex items-center gap-2 md:gap-3 text-white">
            <span className="hidden md:inline font-bold text-lg">Cart</span> 
            <ShoppingCart />
          </Link>
          <button className="flex items-center gap-2 font-bold text-lg text-white">
            <span className="hidden md:inline text-lg">Menu</span>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar