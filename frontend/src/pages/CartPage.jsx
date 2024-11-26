const CartPage = () => {
    return <div className="pt-36 p-10">
        <h1 className="text-center font-bold p-8 text-4xl">
            Cart
        </h1>
        <div className="container mx-auto max-w-6xl">
            {/* Cart Content */}
            <div className="flex flex-row justify-between pb-2">
                <p className="font-semibold">PRODUCT</p>
                <div className="flex gap-10 font-semibold">
                    <p>QUANTITY</p>
                    <p>TOTAL</p>
                </div>
            </div>
            <div className="border-b border-gray-300"></div>
            {/* Cart Items */}
            <div className="mt-8 mb-2 text-center">
                ITEMS
            </div>
            <div className="border-b border-gray-300"></div>
            <div className="flex flex-col items-end">
                <h1 className="pt-4 font-semibold text-2xl">TOTAL:</h1>
                <p className="pt-2 text-lg font-semibold">$20.00</p>
                <p className="pt-8 pb-8">Shipping & taxes calculated at checkout</p>
                <button className="bg-black text-white px-8 py-3 hover:bg-white hover:text-black transition-colors border border-black">
                    CHECKOUT
                </button>
            </div>
        </div>
    </div>
}

export default CartPage