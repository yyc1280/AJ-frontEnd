import React, { useEffect } from "react"
import { updateCart } from "../services/product"
import { Link } from "react-router-dom"

const Card = ({ products, user, cart, setCart }) => {
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
    <div className="card-group justify-content-center">
      {products.map(p => (
        <div
          key={p._id}
          className="card text-center m-4"
          style={{ minWidth: "200px", maxWidth: "200px", border: "none" }}
        >
          <Link to={"/item/" + p._id}>
            <img
              style={{ height: "300px" }}
              src={process.env.REACT_APP_API_URL + "/product/image/" + p._id}
              className="card-img-top"
              alt=""
            />
          </Link>

          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <h5 className="card-text">${p.price}</h5>

            <a
              href="#"
              className={
                "btn btn-danger " + (cart.includes(p) ? "disabled" : "")
              }
              onClick={() => addToCart(p)}
            >
              加入購物車
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
