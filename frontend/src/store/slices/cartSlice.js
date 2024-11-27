import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cartItems')) || [],
        totalQuantity: JSON.parse(localStorage.getItem('cartTotalQuantity')) || 0,
        totalAmount: JSON.parse(localStorage.getItem('cartTotalAmount')) || 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            console.log('Recieved in reducer:', newItem)
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    image: newItem.image
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
            state.totalAmount = state.items.reduce(
                (total, item) => total + item.price * item.quantity, 
                0
            )

            localStorage.setItem('cartItems', JSON.stringify(state.items))
            localStorage.setItem('cartTotalQuantity', JSON.stringify(state.totalQuantity))
            localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount))
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
            state.totalAmount = state.items.reduce(
                (total, item) => total + item.price * item.quantity, 
                0
             ) 

            localStorage.setItem('cartItems', JSON.stringify(state.items))
            localStorage.setItem('cartTotalQuantity', JSON.stringify(state.totalQuantity))
            localStorage.setItem('cartTotalAmount', JSON.stringify(state.totalAmount))
            
        },

        clearCart(state) {
            state.items = []
            state.totalQuantity = 0
            state.totalAmount = 0

            localStorage.removeItem('cartItems')
            localStorage.removeItem('cartTotalQuantity')
            localStorage.removeItem('cartTotalAmount')
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer