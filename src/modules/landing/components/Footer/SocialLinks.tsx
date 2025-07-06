import { Linkedin, Instagram} from "lucide-react"
import { socialLinks } from "../../data/footerData"

const icons = {
  linkedin: Linkedin,
  instagram: Instagram,
}

export function SocialLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-3">Follow On</h4>
      <div className="flex gap-4">
        {socialLinks.map((link) => {
          const Icon = icons[link.icon as keyof typeof icons]
          return (
            <a
              key={link.icon}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Icon className="w-5 h-5" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
