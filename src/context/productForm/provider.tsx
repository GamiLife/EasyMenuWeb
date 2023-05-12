import React from 'react';
import { useRouter } from 'next/router';

import {
  ICombosInvalid,
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

  const [combosInvalid, setCombosInvalid] = React.useState<ICombosInvalid[]>(
    defaultProductFormValues.combosInvalid
  );

  const [combos, setCombos] = React.useState(defaultProductFormValues.combos);

  /**
   * Esta funcion va a recibir 3 parametros :
   * @param comboId : key del campos combos del context
   * @param elementComboId : id del element del array de los combos
   * @param newQuantity nueva cantidad para actualizar
   * @returns actualizar el campo combos con la nueva cantidad actualizada
   */
  const setElementCombo = (
    comboId: number,
    elementComboId: number,
    newQuantity: number
  ) => {
    const combosUpdated = {};
    setCombos(combosUpdated)
  };

  return (
    <ProductFormContext.Provider
      value={{
        secondaryProductsTotalPrice,
        isTriggerValidation,
        combosInvalid,
        combos,
        setSecondaryProductsTotalPrice,
        setIsTriggerValidation,
        setCombosInvalid,
        setElementCombo,
      }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};

export default ProductFormProvider;
