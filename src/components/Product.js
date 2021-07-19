import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { updateCart, getImage } from "../services/product"

const Product = ({ products, user, cart, setCart }) => {
  const { _id } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    setItem(products.find(p => p._id === _id))
  }, [products])

  const addToCart = item => {
    if (!user) {
      window.alert("請先登入")
      return
    }
    const newCart = [...cart, item]
    setCart(newCart)
    updateCart(newCart)
  }

  return (
    <div className="p-5 m-5 d-flex ">
      {item && (
        <>
          <div>
            <img
              style={{ width: "40vw" }}
              src={process.env.REACT_APP_API_URL + "/product/image/" + _id}
              alt=""
            />
          </div>
          <div className="w-50 ms-4 d-flex justify-content-center align-items-center">
            <div className="h-50 d-flex flex-column align-items-center justify-content-evenly ">
              <h2>{item.name}</h2>
              <h2>${item.price}</h2>
              <a
                href="#"
                className={"btn btn-danger"}
                onClick={() => addToCart(item)}
              >
                加入購物車
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product
