export const siteConfig = {
  name: "Premium Botanical Export Experience",
  shortName: "Premium Botanical",
  tagline: "Global Supplier of Premium Botanical Raw Materials & Natural Ingredients",
  description:
    "Premier global supplier of premium botanical raw materials, medicinal herbs, spices, essential oils, and natural extracts. Serving pharmaceutical, nutraceutical, cosmetic, food, and beverage industries across 50+ countries with certified organic and sustainably sourced ingredients.",
  url: "https://botanicalexport.com",
  email: "info@botanicalexport.com",
  phone: "+1 (212) 555-8900",
  address: {
    line1: "245 Park Avenue",
    line2: "Suite 1800",
    city: "New York",
    state: "NY",
    zip: "10167",
    country: "USA",
  },
  social: {
    linkedin: "https://linkedin.com/company/premium-botanical-export",
    instagram: "https://instagram.com/premiumbotanical",
    facebook: "https://facebook.com/premiumbotanical",
  },
  stats: {
    products: "500+",
    countries: "50+",
    partners: "300+",
    experience: "30+",
  },
};

export const navigationLinks = [
  { label: { en: "Home", ar: "الرئيسية" }, href: "/" },
  { label: { en: "Products", ar: "المنتجات" }, href: "/products" },
  { label: { en: "Categories", ar: "التصنيفات" }, href: "/categories" },
  { label: { en: "Industries", ar: "القطاعات" }, href: "/industries" },
  { label: { en: "Certificates", ar: "الشهادات" }, href: "/certificates" },
  { label: { en: "Team", ar: "الفريق" }, href: "/team" },
  { label: { en: "Contact", ar: "اتصل بنا" }, href: "/contact" },
] as const;
