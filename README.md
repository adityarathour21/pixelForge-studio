# PixelForge Studio — Premium Agency Website

> **"We Forge Digital Experiences."**  
> A high-performance, accessible, and conversion-engineered website for **PixelForge Studio**, an independent modern web development agency.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. 100% offline-compatible visual assets, WCAG AA accessible contrast, and zero external dependency vulnerabilities.

---

## 🚀 Key Features

- **Dark Premium Aesthetic**: Deep Navy (`#0B1220`), Dark Navy surface cards (`#111827`), Cyan (`#00D9FF`) glowing accents, and crisp typography (`Space Grotesk` + `Inter`).
- **Single Source of Truth (`siteConfig.js`)**: Edit branding, contact channels, pricing tiers, sample statistics, and form endpoints in one centralized configuration file.
- **Top Bar Contract**: Sticky glassmorphism header with active section scroll-spy, responsive mobile drawer (with Escape key listener & scroll lock), and a skip-to-main-content accessible anchor.
- **8 Core Services**: Interactive capability cards with deliverable checklists, hover glow lift, and icon animations.
- **Filterable Portfolio Showcase**: 8 detailed demo concepts across Business, E-commerce, Portfolio, and Landing Pages. Includes an accessible detail modal with keyboard traps, problem-solution breakdowns, and tech tags.
- **Interactive Pricing Matrix**: Starter (₹3,999), Business (₹7,999 recommended), and Custom tiers. Clicking any plan's CTA scrolls to `#contact` and **automatically pre-selects** the matching service in the contact form.
- **Lead Capture with Demo Mode & Spam Protection**:
  - Full client-side validation (email regex, required fields, minimum message length).
  - ARIA attributes (`aria-invalid`, `aria-describedby`) and automatic focus management on error.
  - Honeypot bot protection field.
  - Works out of the box in safe **Demo Mode** when no backend is set, or connects seamlessly to **Formspree**, **Web3Forms**, or custom REST endpoints.
- **Transparent Sample Data**: All unverified stats, demo concepts, and sample testimonials are explicitly badged with transparency tags (`Sample statistics`, `Demo Concept`, `Sample Testimonial`).
- **100% Offline-Resilient**: No flaky external image URLs. Thumbnails and graphics are rendered using inline SVG isometric matrices and CSS gradients.

---

## 📁 Project Structure

```
pixelforge-studio/
├── index.html                 # SEO metadata, OpenGraph, font preconnects, favicon link
├── package.json               # Pinned dependencies & scripts
├── vite.config.ts             # Vite build & alias configuration
├── tailwind.config.js         # Design tokens & color system extensions
├── README.md                  # Comprehensive documentation & setup guides
├── public/
│   ├── favicon.svg            # Original pixel-anvil-spark vector favicon
│   ├── robots.txt             # Search crawler permissions
│   └── sitemap.xml            # Production sitemap structure
└── src/
    ├── main.tsx               # React DOM entry point
    ├── App.tsx                # App root wiring sections & state
    ├── index.css              # Tailwind CSS imports & theme definitions
    ├── config/
    │   └── siteConfig.js      # SINGLE source of truth for branding, contact, pricing & endpoints
    ├── data/
    │   ├── navLinks.js        # Navigation anchors & labels
    │   ├── services.js        # 8 agency service definitions & deliverables
    │   ├── projects.js        # 8 demo projects & category taxonomy
    │   ├── testimonials.js    # Sample client testimonials & initials avatars
    │   ├── process.js         # 5-phase delivery timeline milestones
    │   └── faqs.js            # Accordion Q&A items
    ├── hooks/
    │   ├── useScrollSpy.js    # Real-time active section detector
    │   ├── useInView.js       # IntersectionObserver scroll reveal trigger
    │   └── useScrolled.js     # Sticky navbar glassmorphism trigger
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx     # Sticky header with scroll-spy & CTA
    │   │   ├── MobileMenu.jsx # Accessible mobile drawer with body scroll lock
    │   │   └── Footer.jsx     # Navigation mirror, dynamic copyright & back-to-top
    │   ├── sections/
    │   │   ├── Hero.jsx       # Value prop & 3D geometric isometric SVG matrix
    │   │   ├── About.jsx      # Value pillars & animated count-up statistics
    │   │   ├── Services.jsx   # 8 service cards with hover glow animations
    │   │   ├── Portfolio.jsx  # Category filter & offline SVG thumbnails
    │   │   ├── PortfolioModal.jsx # Accessible project detail modal
    │   │   ├── WhyChooseUs.jsx# 6 engineering commitments
    │   │   ├── Process.jsx    # 5-step delivery timeline
    │   │   ├── Pricing.jsx    # 3-tier pricing with contact form auto-select
    │   │   ├── Testimonials.jsx # Sample testimonials & star ratings
    │   │   ├── FAQ.jsx        # Accessible single-open accordion
    │   │   └── Contact.jsx    # Validated contact form & direct channels
    │   └── ui/
    │       ├── Logo.jsx       # Original pixel-anvil SVG logo mark & wordmark
    │       ├── Button.jsx     # Accessible button/link with cyan glow states
    │       ├── SectionHeading.jsx # Consistent typographic section headers
    │       ├── Card.jsx       # Dark navy surface container
    │       ├── Badge.jsx      # Transparency & sample tag component
    │       ├── Reveal.jsx     # Viewport reveal transition container
    │       ├── GlowBackground.jsx # Pure CSS ambient glow orbs & subtle grid
    │       ├── FormField.jsx  # Accessible input, select & textarea wrapper
    │       └── Toast.jsx      # Accessible status/alert toast notification
    └── utils/
        └── validators.js      # Client-side form validation rules & regex
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (or pnpm / yarn)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready build in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🎨 Customization Guide

### 1. Brand & Contact Information (`src/config/siteConfig.js`)
All global settings are consolidated in `src/config/siteConfig.js`:

```javascript
export const siteConfig = {
  brand: {
    name: "PixelForge Studio",
    tagline: "We Forge Digital Experiences.",
    description: "Your custom agency description here...",
  },
  contact: {
    email: "hello@yourdomain.com",           // Set to enable mailto: button
    whatsappNumber: "15551234567",           // Country code + digits (no '+' or spaces)
    whatsappMessage: "Hi, I would like to discuss a project.",
  },
  socials: {
    linkedin: "https://linkedin.com/company/youragency",
    github: "https://github.com/youragency",
    twitter: "https://x.com/youragency",
    instagram: "https://instagram.com/youragency",
  },
  // ...
};
```
*Note: Any contact channel or social handle left as `""` will either display an informative configuration tooltip or be omitted cleanly from the footer.*

### 2. Updating Statistics (`src/config/siteConfig.js`)
Update the counter numbers or hide them completely using `showStats`:
```javascript
stats: {
  showStats: true,      // Set to false to hide the statistics block completely
  isPlaceholder: false, // Set to false when you have verified agency metrics!
  noticeText: "Demo Placeholders: Replace with verified agency metrics upon launch",
  items: [
    { id: "projects", label: "Completed Projects", value: 120, suffix: "+" },
    { id: "clients", label: "Client Engagements", value: 85, suffix: "+" },
    { id: "benchmark", label: "Code Quality Benchmark", value: 99, suffix: "%" },
    { id: "vitals", label: "Lighthouse Vitals Target", value: 98, suffix: "+" },
  ],
}
```

### 3. Updating Pricing Plans (`src/config/siteConfig.js`)
The plans are pre-configured with three professional tiers:
- **Launch Plan** (₹3,999+): For individuals, startups and small businesses (1–3 responsive pages, modern UI, contact form, basic SEO, mobile optimization, 1 revision).
- **Growth Plan** (₹7,999+): Highlighting the "Most Popular" badge (Up to 8 pages, custom React components, advanced UI/UX, SEO structure, speed optimization, 3 revisions, 30 days support).
- **Enterprise Plan** (Custom Quote): For advanced websites (E-commerce, web applications, backend/DB, payments, APIs, custom functionality, SLA support).

You can modify prices, currency symbol (`₹`, `$`, `€`, `£`), and deliverables directly in `siteConfig.pricing.plans`.

### 4. Replacing Demo Projects with Real Work (`src/data/projects.js`)
Edit `src/data/projects.js`:
- Update `title`, `shortDescription`, `problemSolved`, and `keyFeatures`.
- Set `liveUrl` to your client's live production URL (e.g. `https://client.com`). When provided, the modal renders a secure "Live Preview" button with `rel="noopener noreferrer"`.
- All demo concepts currently carry explicit "Demo Concept" badges.

### 5. Replacing Sample Testimonials (`src/data/testimonials.js`)
Edit `src/data/testimonials.js`:
- Replace sample names and demo concepts with verified client testimonials.
- PixelForge Studio does not display fictional reviews as genuine endorsements; all sample reviews carry explicit "Demo Content" badges until verified reviews are substituted.

---

## 📬 Contact Form Integration Guide

By default, the contact form operates in **Safe Demo Mode**: it validates all user inputs, simulates a submission delay, and displays an informative modal toast explaining that the form is in demo mode.

To connect the form to a real backend, follow one of these simple methods:

### Option A: Formspree (Recommended & Fastest)
1. Register a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy your endpoint URL (e.g. `https://formspree.io/f/mqkvrxyz`).
3. Open `src/config/siteConfig.js` and set:
   ```javascript
   formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
   ```
4. Submissions will now be emailed directly to your inbox with spam protection!

### Option B: Web3Forms (No Backend Required)
1. Visit [web3forms.com](https://web3forms.com) and generate a free Access Key.
2. Open `src/config/siteConfig.js` and set:
   ```javascript
   formEndpoint: "https://api.web3forms.com/submit",
   ```
3. In `src/components/sections/Contact.jsx`, add your `access_key` to the POST body payload:
   ```javascript
   body: JSON.stringify({
     access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
     name: formData.name,
     email: formData.email,
     service: formData.service,
     message: formData.message,
   })
   ```

### Option C: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com).
2. Create an Email Service (e.g. Gmail) and an Email Template.
3. Install `@emailjs/browser`: `npm install @emailjs/browser`.
4. In `Contact.jsx`, call `emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")`.

---

## 🌐 Free Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on an SSL-enabled `.vercel.app` domain in seconds.

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Select **"Add new site"** > **"Import an existing project"**.
3. Connect your repository.
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.

### Deploying to GitHub Pages
1. In `vite.config.ts`, set the `base` property to your repository name:
   ```typescript
   export default defineConfig({
     base: '/pixelforge-studio/', // Replace with your repo name
     // ...
   });
   ```
2. In `package.json`, add a deploy script:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run `npm install -D gh-pages` and `npm run deploy`.

---

## 🔍 SEO & Production Launch Checklist

Before going live with your custom domain:
- [ ] **Update Domain in `public/robots.txt`**: Replace `https://YOUR_DOMAIN/sitemap.xml` with your actual URL.
- [ ] **Update Domain in `public/sitemap.xml`**: Replace `https://YOUR_DOMAIN/` with your live domain name.
- [ ] **Custom OpenGraph Image**: Add an `og-image.jpg` (1200x630px) to `public/` and reference it in `index.html`:
  ```html
  <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
  ```
- [ ] **Update Contact Email & Phone**: Ensure `siteConfig.js` has your real email and WhatsApp number.
- [ ] **Configure Form Endpoint**: Add your Formspree or Web3Forms URL.
- [ ] **Test Lighthouse Score**: Run Google Lighthouse in Chrome DevTools to verify 95+ scores in Performance, Accessibility, and SEO.

---

## 🐛 Troubleshooting

- **`vite: command not found`**: Run `npm install` to ensure all local node modules are installed.
- **Port 3000 already in use**: Start with a different port using `npx vite --port 3001`.
- **Node version incompatibility**: Ensure your Node version is 18 or newer (`node -v`). Update Node via [nodejs.org](https://nodejs.org) or `nvm use 20`.

---

## 📄 License

This project is licensed under the Apache-2.0 License. Built with pride for **PixelForge Studio**.
