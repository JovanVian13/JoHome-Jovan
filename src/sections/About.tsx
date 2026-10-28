import statsHouse from '../assets/img/StatsHouse.jpg'
import StatItem from '../components/StatItem'
import { stats } from '../data/stats'

function About() {
  return (
    <section id="about" className="px-6 py-10 lg:px-10" data-aos="fade-right">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-defaultColor sm:text-5xl">
        About
      </h2>
      <div className="flex flex-col items-center justify-center gap-12 lg:min-h-[80vh] lg:flex-row">
        <img
          src={statsHouse}
          alt="Modern two-storey house with a pool at dusk"
          className="w-full rounded-xl lg:w-1/2"
        />
        <div className="w-full lg:w-auto">
          <div className="lg:max-w-96">
            <h3 className="text-3xl font-extrabold text-defaultColor">
              We Help You To Find Your Dream Home
            </h3>
            <p className="mt-6 text-justify text-sm font-semibold text-textColor">
              From cozy cottages to luxurious estates, our dedicated team guides you through every
              step of the journey, ensuring your dream home becomes a reality
            </p>
          </div>
          <dl className="mt-10 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
