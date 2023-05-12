[
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  totalPrice: number;
  quantity: number;
  cartId: number;

  dishesCombos: [
    {
        id
        counter
        price
    }
  ],
  saucesCombos: [
    {

        id
        counter
        price
    }
  ]
]

1. Buscar por el cartId el producto.
2. Setearle al producto el quantity y el totalPrice:
    - totalPrice
    - quantity
3. Setearle al producto los dishesCombo y saucesCombo