import React from "react"
export const dataContext = React.createContext({
  user: null,
  setUser: () => {},
  products: [],
  setProducts: () => {},
  cart: [],
  setCart: () => {},
})
