import React, { useEffect } from "react"
import Card from "./Card"
import Slide from "./Slide"
import "../style.css"

const Home = ({ products, user, cart, setCart }) => {
  return (
    <div className="p-5 m-2 d-flex flex-column align-items-center">
      <Slide />
      <div className="m-4 px-5">
        <Card products={products} user={user} cart={cart} setCart={setCart} />
      </div>
    </div>
  )
}

export default Home
