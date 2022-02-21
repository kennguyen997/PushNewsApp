export interface RestaurantType {
  id: string;
  name: string;
  image: string;
  categories: string[];
  price: number;
  reviews: number;
  rating: number;
}

export interface FoodType {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  waitingTime: number;
}
