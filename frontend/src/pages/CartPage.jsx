import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items)
    console.log('Cart items in CartPage:', cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    return (
        <div className="pt-36 p-10">
            <h1 className="text-center font-bold p-8 text-4xl">
                Cart
            </h1>
            <div className="container mx-auto max-w-6xl">
                {/* Cart Layout */}
                <div className="flex flex-row justify-between pb-2">
                    <p className="font-semibold">PRODUCT</p>
                    <div className="flex gap-28 font-semibold">
                        <p>QUANTITY</p>
                        <p>TOTAL</p>
                    </div>
                </div>
                <div className="border-b border-gray-300"></div>
                {/* Cart Items */}
                <div className="mt-10 mb-10">
                    {cartItems.length === 0 ? (
                        <p className="font-semibold mt-20 mb-20 text-3xl">Your cart is empty</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    image={item.image}
                                    totalPrice={item.totalPrice}
                                />
                            ))}
                        </>
                    )}
               </div>
               {/* Footer */}
                <div className="border-b border-gray-300"></div>
                <div className="flex flex-col items-end">
                    <h1 className="pt-4 font-semibold text-2xl">TOTAL: </h1>
                    <p className="pt-2 text-lg font-semibold">${totalAmount.toFixed(2)}</p>
                    <p className="pt-8 pb-8">Shipping & taxes calculated at checkout</p>
                    <button className="bg-black text-white px-8 py-3 hover:bg-white hover:text-black transition-colors border border-black">
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage