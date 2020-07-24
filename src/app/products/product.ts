export interface IProduct {
  productId: number;
  productName: string;
  category: string;

  description: string;
  price: number;
  starRating: number;
  about: object;
  imageUrl: string
}
