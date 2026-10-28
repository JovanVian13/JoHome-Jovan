import house1 from '../assets/img/house1.jpg'
import house2 from '../assets/img/house2.jpg'
import house3 from '../assets/img/house3.jpg'
import type { House } from '../types'

export const houses: House[] = [
  {
    image: house1,
    location: 'San Francisco, California',
    rooms: 4,
    sizeSqFt: 3500,
    priceUsd: 2_500_000,
  },
  {
    image: house2,
    location: 'Beverly Hills, California',
    rooms: 3,
    sizeSqFt: 1500,
    priceUsd: 1_000_000,
  },
  {
    image: house3,
    location: 'Palo Alto, California',
    rooms: 6,
    sizeSqFt: 4000,
    priceUsd: 3_700_000,
  },
]
