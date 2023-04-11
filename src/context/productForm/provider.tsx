import React from 'react';
import { useRouter } from 'next/router';

import {
  IProductFormProvider,
  ProductFormContext,
  defaultProductFormValues,
} from './context';
import { useFetchDishById } from '../../common/hooks';
import { CompanyContext } from '../company';
import { get } from '../../config/api';

const ProductFormProvider = ({ children }: IProductFormProvider) => {
  const router = useRouter();
  const { pslug } = router.query;

  const [secondaryProductsTotalPrice, setSecondaryProductsTotalPrice] =
    React.useState(defaultProductFormValues.secondaryProductsTotalPrice);

  const [isTriggerValidation, setIsTriggerValidation] = React.useState(
    defaultProductFormValues.isTriggerValidation
  );

  const [combosInvalid, setCombosInvalid] = React.useState(
    defaultProductFormValues.combosInvalid
  );

  //   ProductSetWrapper:
  //     isTriggerValidation === True -> verifyIsComboInvalid(comboId)

  // UseCombo:
  //     useEffect() -> [comboCounter] -> validateComboCounter()
  //         isValid : clearFromCombosInvalid(comboId)
  //         isNotValid: addFromCombosInvalid({comboId,message,validationType})

  // ProductForm:
  //     Button Add To Cart: isTriggerValidation -> True

  return (
    <ProductFormContext.Provider
      value={{
        secondaryProductsTotalPrice,
        isTriggerValidation,
        combosInvalid,
        setSecondaryProductsTotalPrice,
        setIsTriggerValidation,
        setCombosInvalid,
      }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};

export default ProductFormProvider;

// const [state, dispatch] = React.useReducer(productFormReducer, INITIAL_STATE);

// const {
//   // id,
//   title,
//   description,
//   priceByUnit,
//   maxItems,
//   slug,
//   imageUrl,
//   combos,
// } = state;

// const {
//   company: { id },
// } = React.useContext(CompanyContext);

//   const { response, isLoading } = useFetchDishById();
//   if (!response) return null;
//   const {
//     combos,
//     description,
//     id,
//     imageUrl,
//     maxItems,
//     priceByUnit,
//     slug,
//     title,
//   } = response;

//   const [totalPrice, setTotalprice] = React.useState(priceByUnit);

// Comment Monday
// React.useEffect(() => {
//   if (!pslug) return;
//   async function dishByIdFetch() {
//     try {
//       const { data, statusCode } = await get(
//         `dishes/slug/${pslug}?companyId=${id}`
//       );
//       if (statusCode === 404) return;
//       dispatch({ type: 'FETCH_SUCCESS', payload: data });
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   dishByIdFetch();
// }, [id, pslug]);
// Comment Monday
