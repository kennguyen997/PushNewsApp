import {FoodType, RestaurantType} from '.';

export interface OrderStyle {
  restaurant: RestaurantType;
  carts: FoodType[];
}
