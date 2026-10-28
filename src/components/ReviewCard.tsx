import { IoMdStar } from 'react-icons/io'
import type { Review } from '../types'

function ReviewCard({ name, city, rating, text, avatar, photo }: Review) {
  return (
    <article
      className="flex w-full max-w-96 flex-col gap-2 rounded-lg bg-frontColor p-5 shadow-lg"
      data-aos="fade-right"
    >
      <img
        src={photo}
        alt={`Photo from ${name}'s review`}
        className="w-full rounded-lg object-cover"
      />
      <div className="flex items-center gap-3 rounded-full bg-white p-5 text-sm text-defaultColor">
        <img src={avatar} alt={name} className="w-12 shrink-0 rounded-full" />
        <div className="flex-1">
          <h3 className="font-bold">{name}</h3>
          <div className="flex items-center justify-between gap-4">
            <p className="font-semibold">{city}</p>
            <p className="flex items-center gap-1 font-bold">
              <IoMdStar className="text-yellow-300" aria-hidden />
              <span className="sr-only">Rating:</span>
              {rating.toFixed(1)}
            </p>
          </div>
        </div>
      </div>
      <blockquote className="rounded-lg bg-white p-5 text-justify text-sm font-semibold text-textColor">
        {text}
      </blockquote>
    </article>
  )
}

export default ReviewCard
