import React from 'react';

export const useProductComboCounter = (maxItemsByRow: number) => {
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
