import Button from '../components/Button'
import headerHouse from '../assets/img/headerhouse.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bgColor px-6 pt-28 pb-10 lg:flex-row lg:px-16 lg:pt-20"
      data-aos="fade-right"
    >
      <div className="max-w-xl lg:flex-1">
        <h1 className="text-4xl font-extrabold text-defaultColor sm:text-5xl">
          Find Your Dream Home
        </h1>
        <p className="mt-8 mb-10 font-bold text-textColor">
          Explore our curated selection of exquisite properties meticulously tailored to your unique
          dream home vision
        </p>
        <Button className="text-sm">Sign Up</Button>
      </div>
      <img
        src={headerHouse}
        alt="Modern three-storey house with glass balconies"
        className="w-full max-w-xl mix-blend-multiply lg:flex-1"
      />
    </section>
  )
}

export default Hero
