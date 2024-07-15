export interface ProductItemProps {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}

export interface ProductItemList {
  items: ProductItemProps[];
}
