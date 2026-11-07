/**
 * PixelForge Studio — Site Configuration
 * 
 * This is the SINGLE SOURCE OF TRUTH for:
 * - Brand details & agency copy
 * - Contact information (email, WhatsApp)
 * - Social media links
 * - Sample statistics and display flags
 * - Pricing plans (Launch, Growth, Enterprise)
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
    description: "PixelForge Studio is a modern digital web development studio crafting high-performance, responsive, and SEO-optimized digital solutions for forward-thinking businesses and founders.",
    foundedYear: 2024,
  },

  // Contact details
  // Keep empty ("") by default so no fictional contact info is displayed.
  // Add your verified agency details when ready to launch!
  contact: {
    email: "", // e.g. "hello@pixelforgestudio.com"
    whatsappNumber: "", // e.g. "919876543210" (country code + number, no '+' or spaces)
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

  // Agency Statistics
  // Honest transparency: mark as demo placeholders until verified metrics are available.
  stats: {
    showStats: true, // Toggle to false to completely hide this block
    isPlaceholder: true, // Explicitly shows the demo placeholder badge
    noticeText: "Demo Placeholders: Replace with verified agency metrics upon launch",
    items: [
      { id: "projects", label: "Completed Projects (Demo)", value: 48, suffix: "+" },
      { id: "clients", label: "Client Engagements (Demo)", value: 36, suffix: "+" },
      { id: "benchmark", label: "Code Quality Benchmark", value: 99, suffix: "%" },
      { id: "vitals", label: "Lighthouse Vitals Target", value: 98, suffix: "+" },
    ],
  },

  // Pricing Plans (Launch, Growth, Enterprise)
  pricing: {
    currencySymbol: "₹",
    disclaimer: "Prices are starting rates and may vary based on project scope, custom integrations, and specific feature sets.",
    plans: [
      {
        id: "launch",
        name: "Launch Plan",
        price: "3,999+",
        isNumericPrice: true,
        numericValue: "3,999",
        priceSuffix: "+",
        period: "starting rate",
        target: "Individuals, startups and small businesses.",
        description: "Ideal for launching a clean, modern digital presence with fast loading times and essential conversions.",
        highlighted: false,
        recommended: false,
        serviceSelectValue: "Website Development",
        features: [
          "1–3 responsive website pages",
          "Modern UI design",
          "Contact form",
          "Basic SEO setup",
          "Mobile optimization",
          "1 revision round",
        ],
        ctaText: "Get Started",
      },
      {
        id: "growth",
        name: "Growth Plan",
        price: "7,999+",
        isNumericPrice: true,
        numericValue: "7,999",
        priceSuffix: "+",
        period: "starting rate",
        target: "Growing businesses and professional brands.",
        description: "Comprehensive solution for established brands demanding high-performance frontend architecture.",
        highlighted: true,
        recommended: true,
        badgeText: "Most Popular",
        serviceSelectValue: "React.js Development",
        features: [
          "Up to 8 responsive pages",
          "Custom React components",
          "Advanced UI/UX design",
          "SEO-friendly structure",
          "Speed optimization",
          "3 revision rounds",
          "30 days support",
        ],
        ctaText: "Choose Growth",
      },
      {
        id: "enterprise",
        name: "Enterprise Plan",
        price: "Custom Quote",
        isNumericPrice: false,
        period: "tailored scope",
        target: "Businesses requiring advanced websites and custom solutions.",
        description: "Bespoke engineering for high-traffic web applications, custom databases, and e-commerce platforms.",
        highlighted: false,
        recommended: false,
        serviceSelectValue: "E-commerce Websites",
        features: [
          "E-commerce website development",
          "Custom web applications",
          "Backend and database integration",
          "Payment gateway integration",
          "API integrations",
          "Custom functionality",
          "Support as per agreement",
        ],
        ctaText: "Contact Us",
      },
    ],
  },

  // Contact Form Submission Endpoint
  // Supported options:
  // - Formspree: "https://formspree.io/f/YOUR_FORM_ID"
  // - Web3Forms: "https://api.web3forms.com/submit"
  // - Any custom JSON REST endpoint expecting POST
  // If left empty (""), the form clearly indicates that configuration is needed.
  formEndpoint: "",
};
