/**
 * PixelForge Studio — Site Configuration
 * 
 * This is the SINGLE SOURCE OF TRUTH for:
 * - Brand details & copy
 * - Contact information (email, WhatsApp)
 * - Social media links
 * - Sample statistics
 * - Pricing tiers and currency
 * - Form submission endpoint (Formspree, Web3Forms, etc.)
 * 
 * Customize this file to personalize your agency website.
 */

export const siteConfig = {
  // Brand identity
  brand: {
    name: "PixelForge Studio",
    tagline: "We Forge Digital Experiences.",
    taglineSubtitle: "We Build Digital Experiences That Drive Growth.",
    description: "PixelForge Studio is a modern web development agency crafting high-performance, responsive, and SEO-optimized digital solutions for forward-thinking businesses.",
    foundedYear: 2021,
  },

  // Contact details
  // Leave empty ("") to show polite placeholders/tooltips prompting configuration.
  // Add your real details when ready to launch!
  contact: {
    email: "", // e.g. "hello@pixelforgestudio.com"
    whatsappNumber: "", // e.g. "919876543210" (country code + number, no '+' or dashes)
    whatsappMessage: "Hi PixelForge Studio, I would like to discuss a web development project.",
    location: "Global Remote Agency",
  },

  // Social media handles
  // Any link left as "" will be gracefully omitted from the UI.
  socials: {
    linkedin: "", // e.g. "https://linkedin.com/company/pixelforge-studio"
    github: "", // e.g. "https://github.com/pixelforge-studio"
    twitter: "", // e.g. "https://x.com/pixelforgestudio"
    instagram: "", // e.g. "https://instagram.com/pixelforgestudio"
  },

  // Key Agency Statistics (Animated count-up in the About section)
  // Visible "Sample statistics" badge is shown to ensure full transparency.
  stats: {
    isPlaceholder: true,
    noticeText: "Sample statistics: replace with real numbers",
    items: [
      { id: "projects", label: "Projects Completed", value: 48, suffix: "+" },
      { id: "clients", label: "Happy Clients", value: 36, suffix: "+" },
      { id: "years", label: "Years of Experience", value: 4, suffix: "+" },
      { id: "satisfaction", label: "Client Satisfaction", value: 99, suffix: "%" },
    ],
  },

  // Pricing Plans (Displayed in Pricing section & connected to Contact form)
  pricing: {
    currencySymbol: "₹",
    disclaimer: "Prices are starting prices and may vary by scope and custom features.",
    plans: [
      {
        id: "starter",
        name: "Starter Website",
        price: "3,999",
        isNumericPrice: true,
        period: "starting at",
        description: "Ideal for small businesses, personal brands, and high-conversion landing pages.",
        highlighted: false,
        recommended: false,
        serviceSelectValue: "Website Development",
        features: [
          "Single to 3-Page Responsive Website",
          "Mobile-First, Modern UI Design",
          "Contact Form with Email Routing",
          "Basic SEO Setup & Meta Tags",
          "Fast Loading Speeds (<2s)",
          "1 Round of Design Revisions",
          "2 Weeks of Post-Launch Support",
        ],
        ctaText: "Choose Starter Plan",
      },
      {
        id: "business",
        name: "Business Website",
        price: "7,999",
        isNumericPrice: true,
        period: "starting at",
        description: "Best for growing companies that need multi-page authority and lead generation.",
        highlighted: true,
        recommended: true,
        badgeText: "Recommended",
        serviceSelectValue: "React.js Development",
        features: [
          "Up to 8 Custom Responsive Pages",
          "Interactive React.js UI Components",
          "Advanced SEO Structure & Schema",
          "Custom Animations & Micro-interactions",
          "CMS Integration / Blog Ready",
          "Speed Optimization & 95+ Lighthouse",
          "3 Rounds of Design Revisions",
          "30 Days of Dedicated Support",
        ],
        ctaText: "Choose Business Plan",
      },
      {
        id: "custom",
        name: "Custom Website",
        price: "Contact for pricing",
        isNumericPrice: false,
        period: "bespoke scope",
        description: "For web apps, e-commerce stores, custom portals, and complex architectures.",
        highlighted: false,
        recommended: false,
        serviceSelectValue: "E-commerce Websites",
        features: [
          "Fully Custom Architecture & Web App",
          "E-Commerce / Payment Gateway Integration",
          "API Integrations & Database Storage",
          "Tailored Design System & Brand Identity",
          "Role-Based Access / Authentication",
          "Automated Deployment Pipeline",
          "Unlimited Architecture Iterations",
          "90 Days of Priority Support & SLA",
        ],
        ctaText: "Inquire for Custom Quote",
      },
    ],
  },

  // Contact Form Submission Endpoint
  // Supported options:
  // - Formspree: "https://formspree.io/f/YOUR_FORM_ID"
  // - Web3Forms: "https://api.web3forms.com/submit"
  // - Any custom JSON REST endpoint expecting POST
  // If left empty (""), the form operates in a safe Demo Mode!
  formEndpoint: "",
};
