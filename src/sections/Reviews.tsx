import ReviewCard from '../components/ReviewCard'
import { reviews } from '../data/reviews'

function Reviews() {
  return (
    <section id="reviews" className="bg-bgColor px-6 py-14" data-aos="fade-right">
      <h2 className="mb-14 text-center text-4xl font-extrabold text-defaultColor">
        What People Say <br className="hidden sm:inline" />
        About JoHome
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  )
}

export default Reviews
