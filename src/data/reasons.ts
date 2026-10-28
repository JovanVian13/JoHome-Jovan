import { BsPersonFillGear } from 'react-icons/bs'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { PiMapPinAreaFill, PiNotepadFill } from 'react-icons/pi'
import type { Reason } from '../types'

export const reasons: Reason[] = [
  {
    icon: PiMapPinAreaFill,
    title: 'Expert Guidance',
    description: "Benefit from our team's seasoned expertise for a smooth buying experience",
  },
  {
    icon: BsPersonFillGear,
    title: 'Personalized Service',
    description: 'Our services adapt to your unique needs, making your journey stress-free',
  },
  {
    icon: PiNotepadFill,
    title: 'Transparent Process',
    description: 'Stay informed with our clear and honest approach to buying your home',
  },
  {
    icon: FaHandshakeSimple,
    title: 'Exceptional Support',
    description: 'Providing peace of mind with our responsive and attentive customer service',
  },
]
