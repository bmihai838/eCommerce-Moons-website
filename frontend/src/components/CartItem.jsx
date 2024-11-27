import { useDispatch } from 'react-redux'
import { cartActions } from '../store/slices/cartSlice'

const CartItem = ({ id, name, price, quantity, image, totalPrice }) => {
  console.log('CardItem image prop:', image)
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(cartActions.removeFromCart(id))
  }

  const handleAdd = () => {
    dispatch(cartActions.addToCart({ id, name, price, image }))
  }

  return (
    <div className='flex flex-row justify-between mb-16'>
      <div className='flex flex-row'>
        <img
          src={image}
          alt={name}
          className='w-auto h-[20vh] object-cover max-w-[10vw]'
        />

        {/* Details */}
        <div className='flex flex-col ml-10'>
          <h3 className='font-semibold pb-5'>{name}</h3>
          <p className='font-semibold pb-2'>Charcoal / S (placeholder)</p>
          <p className='font-semibold'>${price.toFixed(2)}</p>
          
        </div>
      </div>

      {/* Right side content */}
      <div className='flex gap-16 items-center'>
        {/* Quantity controls */}
        <div className='flex flex-col'>
          <div className='flex flex-row border border-black'>
            <button onClick={handleRemove} className='px-3 py-2 font-bold'>-</button>
            <p className='px-3 py-2 '>{quantity}</p>
            <button onClick={handleAdd} className='px-3 py-2 font-bold'>+</button>
          </div>
          <button onClick={handleRemove} className='text-sm font-semibold pt-3 underline'>REMOVE</button>
        </div>

          <p className='w-20 text-right font-semibold'>${totalPrice.toFixed(2)}</p>
        
      </div>
    </div>
  )
}

export default CartItem