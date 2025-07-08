import Link from "next/link"
import { BrandLogo } from "./BrandLogo"

export function Navbar() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between max-w-7xl mx-auto text-foreground">
      <Link href="/" className="flex items-center space-x-3">
        <BrandLogo />
      </Link>

      <button
        className="md:hidden text-foreground text-2xl hover:text-primary transition-colors duration-200"
        aria-label="Menu"
      >
        ☰
      </button>
    </header>
  )
}
