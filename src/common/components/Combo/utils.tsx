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

export const validateQuantity = (quantity: number, maxItemsByRow: number) => {
  if (quantity < 0 || quantity >= maxItemsByRow) return false;
  return true;
};

export const calculateQuantity = (
  quantity: number,
  maxItemsByRow: number,
  operationsType: 'add' | 'substract'
) => {
  const isValid = validateQuantity(quantity, maxItemsByRow);
  if (!isValid) return quantity;
  if (operationsType === 'add') return quantity + 1;
  return quantity - 1;
};
