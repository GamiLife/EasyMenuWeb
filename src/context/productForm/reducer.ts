import { IProductFormContext, defaultProductFormValues } from './context';

type ProductFormAction = {
  type: 'FETCH_SUCCESS';
  payload: IProductFormContext;
};

export const INITIAL_STATE = {
  ...defaultProductFormValues,
};

export const productFormReducer = (
  state: IProductFormContext,
  action: ProductFormAction
): IProductFormContext => {
  const {
    // id,
    title,
    description,
    priceByUnit,
    maxItems,
    slug,
    imageUrl,
    combos,
  } = action.payload;
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        // id,
        title,
        description,
        priceByUnit,
        maxItems,
        slug,
        imageUrl,
        combos,
      };
    default:
      return state;
  }
};
