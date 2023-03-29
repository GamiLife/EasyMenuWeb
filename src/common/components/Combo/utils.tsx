import { GetDishResponseDTO } from '../../types/getDish.type';
import { IComboRow } from './ProductSetWrapper';

export const merge = (
  dishes: GetDishResponseDTO.DishInCombo[],
  sauces: GetDishResponseDTO.SauceInCombo[]
): IComboRow[] => {
  const rowsDish: IComboRow[] = dishes.map(({ dish, ...item }) => ({
    ...item,
    row: { ...dish },
  }));
  const rowsSauce: IComboRow[] = sauces.map(({ sauce, ...item }) => ({
    ...item,
    row: { ...sauce },
  }));
  return [...rowsDish, ...rowsSauce];
};
