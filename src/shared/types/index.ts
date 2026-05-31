export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface SocialLinks {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: Address;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}
