import React, { useContext, useMemo } from 'react';
import { ProductFormContext } from '../../context/productForm';

export const useQuantity = (maxItemsByRow: number) => {
  const [quantity, setQuantity] = React.useState(0);
  const [disableAdd, setDisableAdd] = React.useState(false);
  const [disableSubtract, setDisableSubtract] = React.useState(true);

  function handleSubtract() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setDisableAdd(false);
    }
    if (quantity === 1) {
      setDisableSubtract(true);
    }
  }

  function handleAdd() {
    if (quantity < maxItemsByRow) {
      setQuantity(quantity + 1);
    }
    if (quantity === 0) {
      setDisableSubtract(false);
    }
    if (quantity === maxItemsByRow - 1) {
      setDisableAdd(true);
    }
  }

  return {
    quantity,
    disableAdd,
    disableSubtract,
    handleSubtract,
    handleAdd,
  };
};

export const useProductComboCounter = (
  maxItemsByRow: number,
  idItemFromCombo: number,
  idCombo: number
) => {
  const { combos, setElementCombo } = useContext(ProductFormContext);

  const quantity = useMemo(() => {
    return (
      combos?.[idCombo]?.find(({ id }) => id === idItemFromCombo)?.quantity ?? 0
    );
  }, [combos]);


  const setQuantity = (quantityProp: number) => {
    setElementCombo(idCombo,idItemFromCombo, quantityProp)
  }

  const [disableAdd, setDisableAdd] = React.useState(false);
  const [disableSubtract, setDisableSubtract] = React.useState(true);

  function handleSubtract() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setDisableAdd(false);
    }
    if (quantity === 1) {
      setDisableSubtract(true);
    }
  }

  function handleAdd() {
    if (quantity < maxItemsByRow) {
      setQuantity(quantity + 1);
    }
    if (quantity === 0) {
      setDisableSubtract(false);
    }
    if (quantity === maxItemsByRow - 1) {
      setDisableAdd(true);
    }
  }

  return {
    quantity,
    disableAdd,
    disableSubtract,
    handleSubtract,
    handleAdd,
  };
};
