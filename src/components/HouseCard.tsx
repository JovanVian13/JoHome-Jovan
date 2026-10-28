import { FaLocationDot } from 'react-icons/fa6'
import { IoBedOutline } from 'react-icons/io5'
import { TbRulerMeasure } from 'react-icons/tb'
import Button from './Button'
import type { House } from '../types'

const formatNumber = (n: number) => n.toLocaleString('en-US')

function HouseCard({ image, location, rooms, sizeSqFt, priceUsd }: House) {
  return (
    <article
      className="flex w-full max-w-96 flex-col gap-4 rounded-lg bg-frontColor p-5 shadow-lg"
      data-aos="fade-right"
    >
      <img src={image} alt={`House in ${location}`} className="w-full rounded-lg object-cover" />
      <h3 className="flex items-center gap-2 text-xl font-bold text-defaultColor">
        <FaLocationDot className="shrink-0" />
        {location}
      </h3>
      <div className="flex flex-wrap gap-x-10 gap-y-2 text-lg font-bold text-textColor">
        <p className="flex items-center gap-3">
          <IoBedOutline className="rounded-xs bg-white text-xl" /> {rooms} Rooms
        </p>
        <p className="flex items-center gap-3">
          <TbRulerMeasure className="rounded-xs bg-white text-xl" /> {formatNumber(sizeSqFt)} sq
          feet
        </p>
      </div>
      <div className="mt-1 flex items-center justify-between gap-4">
        <Button className="text-sm">Sign Up</Button>
        <p className="text-2xl font-bold text-textColor">${formatNumber(priceUsd)}</p>
      </div>
    </article>
  )
}

export default HouseCard
