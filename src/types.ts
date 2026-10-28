import type { IconType } from 'react-icons'

export interface NavLink {
  label: string
  to: string
}

export interface House {
  image: string
  location: string
  rooms: number
  sizeSqFt: number
  priceUsd: number
}

export interface Reason {
  icon: IconType
  title: string
  description: string
}

export interface Review {
  name: string
  city: string
  rating: number
  text: string
  avatar: string
  photo: string
}

export interface Stat {
  value: number
  label: string
}
