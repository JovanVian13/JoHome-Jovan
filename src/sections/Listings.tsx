import HouseCard from '../components/HouseCard'
import { houses } from '../data/houses'

function Listings() {
  return (
    <section id="listings" className="px-6 pt-4 pb-14" data-aos="fade-right">
      <h2 className="p-10 text-center text-4xl font-extrabold text-defaultColor">
        Our Popular Residences
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {houses.map((house) => (
          <HouseCard key={house.location} {...house} />
        ))}
      </div>
    </section>
  )
}

export default Listings
