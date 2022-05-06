import { useState, createContext } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const cartList = JSON.parse(localStorage.getItem("cart")) || [];
  const [state, setState] = useState(cartList)

  const cartAdd = (product) => {
    setState([...state, product])
    localStorage.setItem("cart", JSON.stringify(state));
  }

  const cartRemove = (productIndex) => {
    const listProducts = state.filter((el, index) => {
      return index !== productIndex;
    })
    setState(listProducts)
    localStorage.setItem("cart", JSON.stringify(state));
  }

  return (
    <CartContext.Provider value={{state, cartAdd, cartRemove}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider