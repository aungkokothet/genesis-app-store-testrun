// src/modules/common/components/Footer/CopyrightBlock.tsx
import { siteData } from "../../data/footerData"

export function CopyrightBlock() {
  return (
    <div className="text-center text-xs text-black border-t border-border py-4">
      © {siteData.year} {siteData.org}
    </div>
  )
}
