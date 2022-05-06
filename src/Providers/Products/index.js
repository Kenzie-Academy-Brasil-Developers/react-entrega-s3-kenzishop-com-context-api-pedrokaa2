import { useState, createContext } from "react";
import products from "../../db/db";

export const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
  const [state] = useState(products)
  return (
    <ProductsContext.Provider value={{state}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider