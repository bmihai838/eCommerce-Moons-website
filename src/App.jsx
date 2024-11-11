import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"


const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App