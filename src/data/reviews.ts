import customer1 from '../assets/img/customer1.jpg'
import customer2 from '../assets/img/customer2.jpg'
import customer3 from '../assets/img/customer3.jpg'
import picture1 from '../assets/img/picture1.jpg'
import picture2 from '../assets/img/picture2.jpg'
import picture3 from '../assets/img/picture3.jpg'
import type { Review } from '../types'

export const reviews: Review[] = [
  {
    name: 'Sarah Nguyen',
    city: 'San Francisco',
    rating: 5,
    text: 'JoHome truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.',
    avatar: customer1,
    photo: picture1,
  },
  {
    name: 'Michael Rodriguez',
    city: 'San Diego',
    rating: 4.5,
    text: 'I had a fantastic experience working with JoHome. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. They are very highly recommended!',
    avatar: customer2,
    photo: picture2,
  },
  {
    name: 'Emily Johnson',
    city: 'Los Angeles',
    rating: 4.8,
    text: "JoHome made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home! Thank You JoHome!",
    avatar: customer3,
    photo: picture3,
  },
]
