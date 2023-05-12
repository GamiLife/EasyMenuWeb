import React from 'react';
import { useRouter } from 'next/router';

import {
  ICombosInvalid,
  IElementCombo,
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

  const [combos, setCombos] = React.useState<Record<number, IElementCombo[]>>(
    defaultProductFormValues.combos
  );

  /**
   * Ejemplo:
   * {
   *  1(comboId- salsas): [
   *  {
   *  id: 1,(elementComboId)
   *  quantity: 0(newQuantity)
   * },
   *  {
   *  id: 2,(elementComboId)
   *  quantity: 0(newQuantity)
   * }
   * ],
   *
   *  2(comboId- dishes1): [
   *  {
   *  id: 1,(elementComboId)
   *  quantity: 0(newQuantity)
   * },
   *  {
   *  id: 2,(elementComboId)
   *  quantity: 0(newQuantity)
   * }
   * ]
   *
   * }
   */

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
    const combosUpdated = {
      ...combos,
      [comboId]: [
        ...combos[comboId],
        // Buscas el elemento de este array , y lo seteas en este mismo array
      ],
    };
    setCombos(combosUpdated);
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
