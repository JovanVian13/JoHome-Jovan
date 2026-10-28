import ScrollLink from '../components/ScrollLink'
import { contact } from '../data/contact'
import { footerLinks } from '../data/navLinks'

const linkClass = 'text-sm font-semibold hover:text-backColor text-textColor'

function Footer() {
  return (
    <footer className="w-full items-center justify-center bg-frontColor" data-aos="fade-up">
      <div className="flex w-full flex-col justify-between p-8 px-5 md:flex-row md:px-28">
        <div className="w-full md:w-1/4">
          <h2 className="pb-4 text-xl font-semibold text-defaultColor">JoHome</h2>
          <p className="pb-4 text-justify text-sm font-semibold text-textColor">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>
        <nav aria-label="Footer" className="flex w-full flex-col items-start md:w-1/4">
          <h2 className="pb-4 text-xl font-semibold text-defaultColor">Links</h2>
          {footerLinks.map(({ label, to }) => (
            <ScrollLink key={to} to={to} className={linkClass}>
              {label}
            </ScrollLink>
          ))}
        </nav>
        <div className="flex w-full flex-col items-start md:w-1/4">
          <h2 className="pb-4 text-xl font-semibold text-defaultColor">Social Media</h2>
          <a href={`mailto:${contact.email}`} className={linkClass}>
            {contact.email}
          </a>
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`} className={linkClass}>
            {contact.phone}
          </a>
        </div>
      </div>
      <p className="mt-2 py-10 text-center font-semibold text-textColor">
        &copy; {new Date().getFullYear()} Jovan Vian Thendra | All rights reserved
      </p>
    </footer>
  )
}

export default Footer
