import { CircleUser, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const menus = [
    {
      title: "MENS",
      items: [
        { name: "Shirts", path: "/mens/shirts" },
        { name: "Outerwear", path: "/mens/outerwear" },
        { name: "View All", path: "/mens/all" }
      ]
    },
    {
      title: "WOMENS",
      items: [
        { name: "Shirts", path: "/womens/shirts"},
        { name: "Outerwear", path: "/womens/outerwear"},
        { name: "View All", path: "/womens/all"}
      ]
    },
    {
      title: "KIDS",
      items: [
        { name: "Shirts", path: "/kids/shirts"},
        { name: "Outerwear", path: "/kids/outerwear"},
        { name: "View All", path: "/kids/all"}
      ]
    },
    {
      title: "ACCESORIES",
      items: [
        { name: "View All", path: "/accesories/all"}
      ]
    }
  ]


  return (
    <nav className="fixed w-full bg-black shadow-lg z-50">
      <div className="px-4 py-8 md:py-4 flex items-center">
        {/* Left side - Logo */}
        <Link to="/" className="font-bold text-xl text-white flex items-center gap-2">
          <img src="/assets/logo/moon2.webp" alt="Moons"  
            className="h-0 md:h-16 rounded-md"
          />
        </Link>

        {/* Center - Mega Menu */}
          {menus.map(menu => (
            <MegaMenu key={menu.title} {...menu} />
          ))}
        
        

        {/* Right side */}
        <div className="flex ml-auto gap-10 md:gap-8 items-center px-4">
          <Link to="/cart" className="flex items-center gap-2 md:gap-3 text-white">
            <span className="hidden md:inline font-bold text-lg">Cart</span> 
            <ShoppingCart />
          </Link>
          <button className="flex items-center gap-2 font-bold text-lg text-white">
            <span className="hidden md:inline text-lg">ACCOUNT</span>
            <CircleUser />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar