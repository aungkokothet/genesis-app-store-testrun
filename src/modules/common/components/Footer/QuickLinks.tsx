import Link from "next/link"
import { quickLinks } from "../../data/footerData"

export function QuickLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        {quickLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
