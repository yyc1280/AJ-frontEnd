import React from "react"
import { updateCart } from "../services/product"
import { Link } from "react-router-dom"
import cartIcon from "../images/cart4.svg"

const Card = ({ products, user, cart, setCart }) => {
  const addToCart = item => {
    if (!user) {
      window.alert("請先登入")
      window.location = `${process.env.REACT_APP_API_URL}/auth/google`
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
          className="card text-center m-3"
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
            <span className="card-text">${p.price}</span>

            <button
              style={{ padding: "0 10px 5px 10px", marginLeft: "10px" }}
              className={
                "btn btn-danger " + (cart.includes(p) ? "disabled" : "")
              }
              onClick={() => addToCart(p)}
            >
              <img style={{ width: "25px" }} src={cartIcon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
