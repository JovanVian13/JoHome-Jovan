import ReasonCard from '../components/ReasonCard'
import { reasons } from '../data/reasons'

function Reasons() {
  return (
    <section id="reasons" className="px-6 py-10 text-center" data-aos="fade-right">
      <h2 className="text-4xl font-bold text-defaultColor">Why Choose Us</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-textColor">
        Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized
        Service
      </p>
      <div className="mt-10 flex flex-wrap items-stretch justify-center gap-8">
        {reasons.map((reason) => (
          <ReasonCard key={reason.title} {...reason} />
        ))}
      </div>
    </section>
  )
}

export default Reasons
