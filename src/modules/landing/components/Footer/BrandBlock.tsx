export function BrandBlock() {
  return (
    <div className="space-y-5 flex flex-col items-start">
       <h4 className="text-lg font-semibold mb-3">The Builders' Stack</h4>
        {/* Brand Description */}
      <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
       The Builders' Stack is about uncovering the hidden structures, patterns, and processes in your business that you could leverage on for your accelerated growth and building your Apps from there.
      </p>
      {/* Smaller Partner Logos */}
      <div className="flex items-center gap-4">
        <img
          src="/assets/logo-9figures.svg"
          alt="9Figures"
          className="h-6 w-auto object-contain"
        />
        <img
          src="/assets/logo-ftlp.svg"
          alt="FTLP"
          className="h-6 w-auto object-contain"
        />
        <img
          src="/assets/logo-gvn-nexus.svg"
          alt="GVN Nexus"
          className="h-6 w-auto object-contain"
        />
      </div>
    </div>
  )
}
