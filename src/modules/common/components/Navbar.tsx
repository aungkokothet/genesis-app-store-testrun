import Link from "next/link"

export function Navbar() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between max-w-7xl mx-auto text-foreground">
      <Link href="/" className="flex items-center space-x-3">
        <img
          src="/assets/genesis-logo.svg"
          alt="AppStack.GVN Logo"
          className="h-14 sm:h-16 md:h-20 w-auto object-contain opacity-90 drop-shadow-md"
        />
      </Link>

      {/* Optional hamburger icon for mobile */}
      <button
        className="md:hidden text-foreground text-2xl hover:text-primary transition-colors duration-200"
        aria-label="Menu"
      >
        ☰
      </button>
    </header>
  )
}
