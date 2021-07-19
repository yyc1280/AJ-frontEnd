import axios from "axios"
import Cookies from "universal-cookie"
const cookies = new Cookies()

export const getAllProducts = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/product", {
    withCredentials: true,
  })
}

export const getCart = () => {
  return localStorage.getItem("cart")
}

export const updateCart = cart => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const pay = (products, sum) => {
  const names = products.map(p => p.name)

  return axios.post(
    process.env.REACT_APP_API_URL + "/payment",
    {
      names,
      sum,
    },
    {
      withCredentials: true,
    }
  )
}

export const getRecord = () => {
  return axios.get(
    process.env.REACT_APP_API_URL + "/payment",

    { withCredentials: true }
  )
}
