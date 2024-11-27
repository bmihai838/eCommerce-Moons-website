import { Link } from "react-router-dom";

const MegaMenu = ({ title, items }) => (
  <div className="group relative px-3 sm:px-6 md:px-6 lg:px-10">
    <span className="text-white font-bold cursor-pointer text-base sm:text-lg md:text-xl">
      {title}
    </span>
          
    {/* Menu Content */}
    <div className="absolute top-full left-0 sm:left-4 md:left-6 lg:left-8 bg-black w-48 
                    opacity-0 group-hover:opacity-100 invisible
                    group-hover:visible transform -translate-y-2
                    group-hover:translate-y-0 transition-all
                    duration-300 ease-in-out">
      <div className="h-7 md:h-8 text-white"></div>
      <div>
        {items.map(item => (
        <Link 
          key={item.path}
          to={item.path} 
          className="group/item block px-8 py-4 text-white hover:text-gray-300 relative overflow-hidden"
        >
        {/* White Bar Transition */}
          {item.name}
          <span className="absolute left-0 top-0 w-0 h-1 bg-white transition-all duration-300 group-hover/item:w-full z-10"></span>
        </Link>
        ))}
      </div>
    </div>
  </div>
)

export default MegaMenu