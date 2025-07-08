# genesis-app-store-testrun

**File:** `src/pages/_app.tsx`

- Does not use `ThemeProvider` — intentional decision.
- Font applied globally using `Geist` from `next/font`.
- Shadcn Toaster mounted and functional.
- Layout assumes light mode only.
- No dynamic theme switching.

**File:** `styles/globals.css`

- Theme tokens are declared via `:root` → ✅ safe for light-only usage.
- Dark theme tokens are defined but unused.
- Tailwind utility classes (`text-foreground`, `bg-background`, etc.) resolve safely in light mode.
- No ThemeProvider required for current use.
- No runtime theme switching possible (expected).

**File:** `pages/index.tsx`

- ✅ ThemeProvider not used (intended)
- ✅ `bg-white/70` used instead of Shadcn `bg-background` → safe
- ✅ `text-foreground` maps to `oklch(0 0 0)` in `:root`
- ✅ Fully compliant with static light-mode design system
- No issues or adjustments needed

**Folder:** components/ui

- ✅ Shadcn-generated components (button, input, form, label, sonner)
- ❌ No ThemeProvider used → component tokens are static
- ⚠️ Modified files like `input.tsx` have been reviewed
- ✅ No additional review needed unless files are further edited

**File:** components/ui/input.tsx

- ✅ Fully compliant with no-theme-provider setup
- ✅ Border and background explicitly enforced via Tailwind
- ✅ Tokens like `text-foreground` and `placeholder:text-muted-foreground` safely resolve from `:root`
- ⚠️ `dark:*` variants present but unused — harmless

**Concept:** `modules/` is a domain-driven folder structure for organizing UI + logic by feature intent.

- Promotes clarity and maintainability
- Perfect for scaling your app beyond MVP
- Aligns with T3 and modern modular app conventions
- No issues with Shadcn usage in this context

## 📁 modules/common

`modules/common` contains layout-level and structural components shared across the entire app (e.g. `MainLayout`, `Navbar`, `FooterSection`).  
It serves as the global **UI shell layer** and should **not include domain-specific UI**. These components are responsible for **wrapping** page or module-level features such as `landing`, `registration`, etc.

**File:** modules/common/components/MainLayout.tsx

- ✅ No ThemeProvider used (intentional)
- ✅ Uses Shadcn theme tokens (`bg-background`, `text-foreground`) that are safely defined in `:root`
- ✅ Layout utilities are stable
- ⚠️ Optional: `bg-background/20` could be replaced with `bg-white/30` for full visual certainty

**File:** common/components/NavBar  
- index.tsx  
- BrandLogo.tsx  

**File:** common/data/  
- navbarData.ts  

- ✅ No ThemeProvider used (intentional — project is locked to light mode)  
- ✅ Uses `text-foreground`, which resolves safely to `oklch(0 0 0)` via `:root`  
- ✅ Uses `hover:text-primary`, which maps to a defined oklch tone — visually stable  
- ✅ Layout classes (`flex`, `px-6`, `max-w-7xl`) are pure Tailwind — no theme dependency  
- ✅ Mobile hamburger icon (`☰`) uses theme-safe classes (`text-foreground`, `hover:text-primary`)  
- ✅ Logo abstracted into `<BrandLogo />`, using static `src` path from `navbarData.ts` (no SVG import issues)

**File:** common/components/Footer  
- index.tsx  
- BrandBlock.tsx  
- QuickLinks.tsx  
- SocialLinks.tsx  
- CopyrightBlock.tsx  

**File:** common/data/  
- footerData.ts  

- ✅ No ThemeProvider used (intentional — project is locked to light mode)  
- ✅ Uses `bg-card/90`, `text-muted-foreground`, `border-border` — all safely resolved from `:root` in light mode  
- ✅ All theme tokens (`bg-card`, `text-muted-foreground`, etc.) are oklch-backed via `globals.css`  
- ✅ `transition-colors` adds polish, doesn’t rely on theme switching  
- ✅ Layout (`max-w-7xl`, `grid-cols-3`, `gap-8`) is pure Tailwind  
- ✅ Footer blocks (`BrandBlock`, `QuickLinks`, etc.) are cleanly composed and separated  

**File:** common/components/Footer/BrandBlock.tsx  
**Data:** common/data/footerData.ts  

- ✅ No ThemeProvider used (intentional — project is locked to light mode)
- ✅ `text-foreground` is used on both `<h4>` and `<p>` — resolves safely to black via `:root`
- ✅ Partner logos use simple `img src="/assets/*.svg"` — no import or build issues
- ✅ Tailwind classes (`space-y-5`, `flex`, `gap-4`, etc.) are visual-only and safe
- ✅ `max-w-xs`, `leading-relaxed` ensure clean layout without theme dependency

**File:** common/components/Footer/QuickLinks.tsx  
**Data:** common/data/footerData.ts  

- ✅ No ThemeProvider used (intentional — project is locked to light mode)
- ✅ Uses `text-foreground` for both heading and list — resolves to `oklch(0 0 0)` via `:root`
- ✅ `hover:text-primary` safely resolves from static oklch color token — visually consistent
- ✅ `transition-colors duration-200` enhances UX without relying on theme switch
- ✅ `space-y-2`, `font-medium`, `text-sm` — all Tailwind-only, theme-agnostic
- ✅ Links are pulled from external config (`quickLinks`) — clean separation of data and layout

**File:** common/components/Footer/SocialLinks.tsx  
**Data:** common/data/footerData.ts  

- ✅ No ThemeProvider used (intentional — project is locked to light mode)
- ✅ Uses `text-foreground` for container + heading — resolves safely to `oklch(0 0 0)` via `:root`
- ✅ `hover:text-primary` and `ring-ring` safely resolve from tokens defined in `globals.css`
- ✅ `focus-visible:outline-none` + `focus-visible:ring-2` improve accessibility without relying on theme switching
- ✅ Icons from `lucide-react` use className-based styling (`w-5 h-5`) — no theme issues
- ✅ Mapping icons from `footerData.ts` is clean, controlled, and scalable
- ✅ `transition-colors` used properly to animate hover/focus without theme dependency

**File:** common/components/Footer/CopyrightBlock.tsx  
**Data:** common/data/footerData.ts  

- ✅ No ThemeProvider used (intentional — project is locked to light mode)
- ✅ Uses `text-black` instead of `text-foreground` → hardcoded light-mode-safe color
- ✅ Uses `border-border`, which resolves via `:root` (defined as oklch light gray)
- ✅ Typography and layout classes (`text-xs`, `text-center`, `py-4`) are pure Tailwind
- ✅ No conditional or dynamic styling — clean and stable


## 📁 modules/registration

### 📁 components
- `RegistrationForm.tsx`  
  - ✅ Uses `Form`, `FormItem`, `FormLabel`, `FormControl`, and `FormMessage` from Shadcn
  - ✅ Uses Shadcn `Input` and `Button` components
  - ✅ All layout and color classes are Tailwind-only (`space-y-4`, `w-full`, etc.)
  - ✅ Theme tokens (`text-foreground`, `hover:text-primary`) are stable via `:root`
  - ✅ Error messages and red borders handled via Shadcn + `react-hook-form` styles
  - ✅ No ThemeProvider used (intentional — project is light-mode only)

---

### 📁 hooks
- `useRegister.ts`  
  - ✅ Form state initialized via `useForm` using `zodResolver(registrationSchema)`
  - ✅ `form.reset()` enhanced with `{ keepErrors: false, keepDirty: false, keepTouched: false }`
  - ✅ Toasts (`sonner`) used for visual feedback — not theme-dependent
  - ✅ `router.refresh()` used instead of `router.push("/")` to ensure clean RHF state
  - ✅ Hook logic is self-contained, reusable, and UI-agnostic

---

### 📁 data
- `registrationSchema.ts`  
  - ✅ Schema defined using Zod for field validation
  - ✅ No theme logic or UI classes involved
  - ✅ Clean boundary between validation and UI logic

---

## ✅ Summary
- No ThemeProvider used (by design)
- All visual elements are Shadcn-compliant
- `react-hook-form` + `zod` integration is correctly enforced
- UX and reset behavior are clean and predictable in light-mode
- Data/logic/UI separation is well maintained

## 📁 modules/landing

### 📁 components
- `HeroSection.tsx`  
  - ✅ Uses Shadcn-friendly class tokens like `text-foreground`, `bg-muted/50`, `rounded-lg`, `p-6`
  - ✅ Pulls data dynamically from `heroData.ts` (no inline strings)
  - ✅ Typography classes (`text-3xl`, `font-bold`) are consistent and utility-based
  - ✅ Shadcn theme tokens (`text-muted-foreground`, `bg-muted/50`) map correctly to `:root` values
  - ✅ No ThemeProvider used (by design — project is locked to light mode)

---

### 📁 data
- `heroData.ts`  
  - ✅ Contains static title, subtitle, and paragraph copy
  - ✅ Clean separation from layout logic
  - ✅ Zero dependency on theme tokens — purely content

---

### 📁 tokens
- `typography.ts`  
  - ✅ Centralized typography class map (e.g. `title`, `subtitle`, `text`)
  - ✅ Classes are Tailwind utility classes that resolve directly — no dynamic theme logic
  - ✅ Enables scalable reuse across other landing components

---

### index.tsx
- ✅ Serves as clean export layer for section-level composition
- ✅ Keeps `LandingPage` logic isolated from route layout
- ✅ Uses Tailwind layout classes — no theme conflict

---

## ✅ Summary
- No ThemeProvider used (intentionally light-mode only)
- Uses Shadcn-friendly tokens like `text-foreground`, `bg-muted/50`, `rounded-lg`, etc.
- Component logic cleanly separated from data and class tokens
- Compliant with global `:root` theme variable mapping
- Fully modular and safely scalable

## 📄 pages/components/RegistrationCard.tsx

- ✅ `useRegister()` is imported from `modules/registration/hooks`  
  → clean logic separation, no inline mutation code
- ✅ `RegistrationForm` is imported from `modules/registration/components`  
  → pure visual structure handled elsewhere
- ✅ Wrapper `<div>` uses Shadcn-safe classnames:
  - `w-full`, `space-y-4` → layout only
  - No background, border, or theme-bound classes used here
- ✅ `<h2>` uses: `text-xl`, `font-semibold`, `text-center`  
  → safe Tailwind typographic styling
- ✅ **No ThemeProvider** — consistent with app-wide light-mode policy
- ✅ No hardcoded colors like `text-black` or `bg-white` — follows token strategy

---

## ✅ Summary
- Acts as a **light wrapper/composer** for form logic + visual structure
- Uses clean utility classes
- Fully Shadcn-compatible
- Theme-safe and portable

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
