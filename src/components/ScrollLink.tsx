import type { ReactNode } from 'react'
import { Link } from 'react-scroll'

interface ScrollLinkProps {
  to: string
  className?: string
  onClick?: () => void
  children: ReactNode
}

// Smooth-scrolls to the section with id `to`. The href keeps the link
// keyboard-focusable and working without JavaScript.
function ScrollLink({ to, className = '', ...props }: ScrollLinkProps) {
  return (
    <Link
      to={to}
      href={`#${to}`}
      spy
      smooth
      duration={500}
      className={`cursor-pointer ${className}`}
      {...props}
    />
  )
}

export default ScrollLink
