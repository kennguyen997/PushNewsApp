import {FoodsType, RestaurantType} from '.';

export interface OrderStyle {
  restaurent: RestaurantType;
  carts: FoodsType[];
}
