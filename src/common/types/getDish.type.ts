/* eslint-disable @typescript-eslint/no-namespace */
export interface GetDishResponseDTO {
  id: number;
  title: string;
  description: string;
  slug: string;
  priceByUnit: number;
  maxItems: number;
  imageUrl: string;

  combos: GetDishResponseDTO.Combo[];
}

export namespace GetDishResponseDTO {
  export interface Dish {
    id: number;
    title: string;
    description: string;
    priceByUnit: number;
    imageUrl: string;
  }

  export interface DishInCombo {
    dish: Dish;
    id: number;
    maxItemsByRow: number;
    priceByUnit: number;
  }

  export interface Sauce {
    id: number;
    title: string;
    description: string;
    priceByUnit: number;
    imageUrl: string;
  }

  export interface SauceInCombo {
    sauce: Sauce;
    id: number;
    maxItemsByRow: number;
    priceByUnit: number;
  }

  export interface Combo {
    id: number;
    title: string;
    description: string;
    maxItems: number;

    dishes: DishInCombo[];
    sauces: SauceInCombo[];
  }
}
