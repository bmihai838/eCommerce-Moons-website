import heroImage from '/assets/wall_homepage.webp'
import ProductGrid from './ProductGrid'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 200)

    return () => setIsLoaded(false)
  }, [])

  return (
    <div className="pt-30">
      <div className='overflow-hidden'>
        <img
          src={heroImage}
          alt="Hero Image"
          className={`w-full h-[90vh] transition-transform duration-1000 ease-out ${
            isLoaded ? 'scale-100' : 'scale-150'
          }`}
        />
      </div>
      <h1 className='text-black text-center mt-20 mb-20 text-3xl font-semibold'>TRENDING</h1>
      <div className='border-b border-gray-400 mt-10'></div>
      <ProductGrid category="trending"/>
    </div>
  )
}

export default HomePage