export interface ProductSpecifications {
  moisture: string;
  purity: string;
  ashContent: string;
  essentialOil: string;
  packaging: string;
  shelfLife: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specifications: ProductSpecifications;
  image: string;
}
