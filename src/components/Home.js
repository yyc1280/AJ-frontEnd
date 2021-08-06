import React, { useContext, useState, useEffect } from "react"
import Card from "./Card"
import Slide from "./Slide"
import { dataContext } from "../context"

const Home = () => {
  const { products, user, cart, setCart } = useContext(dataContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (products.length > 0) {
      setLoading(false)
    }
  }, [products])

  return (
    <div className=" d-flex flex-column align-items-center">
      <Slide />
      <div className="m-4 px-5">
        {loading && (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        <Card products={products} user={user} cart={cart} setCart={setCart} />
      </div>
    </div>
  )
}

export default Home
