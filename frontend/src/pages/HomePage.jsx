import heroImage from '/assets/wall_homepage.webp'

const HomePage = () => {
  return (
    <div className="pt-34">
      <div className="relative h-screen">
        <img
          src={heroImage}
          alt="Hero Image"
          className="w-full h-full"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-32 bg-black text-white px-14 py-3 text-lg font-semibold hover:bg-white hover:text-black transition-colors">
          SHOP NOW
        </button>
      </div>
    </div>
  )
}

export default HomePage