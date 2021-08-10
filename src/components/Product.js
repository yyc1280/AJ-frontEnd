import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { updateCart } from "../services/product"
import { dataContext } from "../context"

const Product = () => {
  const { products, user, cart, setCart } = useContext(dataContext)

  const { _id } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    console.log(products)
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
    <div className="p-5 m-3">
      {item && (
        <div className="product d-flex">
          {/* <div> */}
          <img
            style={{ width: "40vw", objectFit: "cover" }}
            src={process.env.REACT_APP_API_URL + "/product/image/" + _id}
            alt=""
          />
          {/* </div> */}
          <div className="right w-50 ms-4 d-flex justify-content-center align-items-center">
            <div className="right-col h-50 d-flex flex-column align-items-center justify-content-evenly ">
              <h2>{item.name}</h2>
              <h2>${item.price}</h2>
              <br />
              <p style={{ textAlign: "center" }}>{item.description}</p>
              <br />
              <a
                href="#"
                className={"btn btn-danger"}
                onClick={() => addToCart(item)}
              >
                加入購物車
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
