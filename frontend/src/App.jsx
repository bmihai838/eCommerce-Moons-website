import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import Navbar from "./components/Navbar"
import AdminPage from "./pages/AdminPage"
import ProductGrid from "./pages/ProductGrid"


const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/admin" element={<AdminPage />} ></Route>
        {/* MEN Routes */}
        <Route path="/mens/shirts" element={<ProductGrid category="MENS" subcategory="shirt" title="MEN"/>}></Route>
        <Route path="/mens/outerwear" element={<ProductGrid category="MENS" subcategory="outerwear" title="MEN"/>}></Route>
        <Route path="/mens/all" element={<ProductGrid category="MENS" title="MENS"/>}></Route>
        {/* WOMENS Routes*/}
        <Route path="/womens/shirts" element={<ProductGrid category="WOMENS" subcategory="shirt" title="WOMEN"/>}></Route>
        <Route path="/womens/outerwear" element={<ProductGrid category="WOMENS" subcategory="outerwear" title="WOMEN"/>}></Route>
        <Route path="/womens/all" element={<ProductGrid category="WOMENS" title="WOMENS"/>}></Route>
        {/* KIDS Routes*/}
        <Route path="/kids/shirts" element={<ProductGrid category="KIDS" subcategory="shirt" title="KID"/>}></Route>
        <Route path="/kids/outerwear" element={<ProductGrid category="KIDS" subcategory="outerwear" title="KID"/>}></Route>
        <Route path="/kids/all" element={<ProductGrid category="KIDS" title="KIDS"/>}></Route>
        {/* ACCESORIES */}
        <Route path="/accesories/all" element={<ProductGrid category="accesories" title="ACCESORIES"/>}></Route>
        {/* CART */}
        <Route path="/cart" element={<ProductGrid category="accesories" title="accesories"/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App