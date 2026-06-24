import Link from "next/link"
import { footerLinks, contactInfo } from "@/data/navigation"
import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
      case "whatsapp":
        return <MessageCircle className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <footer className="relative band-ink overflow-hidden">
      {/* decorative bead row across the top edge */}
      <div className="absolute inset-x-0 top-0 h-1.5 flex">
        <span className="flex-1 bg-saffron" />
        <span className="flex-1 bg-tomato" />
        <span className="flex-1 bg-sun" />
        <span className="flex-1 bg-cobalt" />
        <span className="flex-1 bg-pine" />
      </div>

      {/* Main footer */}
      <div className="container-custom pt-20 pb-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-paper bg-saffron">
                <span className="font-extrabold text-xl text-ink">M</span>
              </span>
              <span className="leading-none">
                <span className="block font-extrabold text-lg text-paper">Mind Mantra</span>
                <span className="mt-0.5 block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-saffron">
                  Abacus
                </span>
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-paper/70">
              Empowering young minds with scientific brain-development programmes since 2009.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-lg border-2 border-paper/30 text-paper/80 transition-all hover:-translate-y-0.5 hover:border-saffron hover:bg-saffron hover:text-ink"
                  aria-label={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-saffron">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/75 transition-colors hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-saffron">Our Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/75 transition-colors hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-saffron">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-paper/75">
                <MapPin className="h-5 w-5 flex-shrink-0 text-saffron" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-paper/75">
                <Phone className="h-5 w-5 flex-shrink-0 text-saffron" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-paper">{contactInfo.phone}</a>
              </li>
              <li className="flex gap-3 text-sm text-paper/75">
                <Mail className="h-5 w-5 flex-shrink-0 text-saffron" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-paper">{contactInfo.email}</a>
              </li>
              <li className="flex gap-3 text-sm text-paper/75">
                <Clock className="h-5 w-5 flex-shrink-0 text-saffron" />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-paper/15">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 text-sm text-paper/60 md:flex-row">
          <p>© {currentYear} Mind Mantra Abacus. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-paper">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-paper">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
