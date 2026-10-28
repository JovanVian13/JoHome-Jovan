import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import Button from '../components/Button'
import ScrollLink from '../components/ScrollLink'
import { navLinks } from '../data/navLinks'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const MenuIcon = menuOpen ? IoIosClose : MdMenu

  return (
    <header className="fixed z-10 w-full" data-aos="fade-down">
      <div className="relative flex items-center justify-between bg-frontColor px-6 py-6 lg:px-16">
        <p className="text-3xl font-bold text-defaultColor sm:text-4xl">JoHome</p>
        <nav
          aria-label="Main"
          className="hidden items-center gap-10 text-2xl font-semibold lg:flex xl:gap-16"
        >
          {navLinks.map(({ label, to }) => (
            <ScrollLink
              key={to}
              to={to}
              className="text-defaultColor transition-all hover:text-textColor"
            >
              {label}
            </ScrollLink>
          ))}
          <Button>Sign Up</Button>
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-defaultColor lg:hidden"
        >
          <MenuIcon size={28} />
        </button>
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          inert={!menuOpen}
          className={`${menuOpen ? 'visible translate-x-0' : 'invisible -translate-x-full'} absolute inset-x-0 top-full flex flex-col gap-8 bg-frontColor pt-8 pb-6 text-center text-2xl font-semibold transition-all duration-300 lg:hidden`}
        >
          {navLinks.map(({ label, to }) => (
            <ScrollLink
              key={to}
              to={to}
              className="text-defaultColor"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
