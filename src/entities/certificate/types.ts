export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  badge: string;
  image: string;
  issuedDate: string;
  expiryDate: string | null;
}
