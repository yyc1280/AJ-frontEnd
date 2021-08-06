import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Card from "./Card"
import Slide from "./Slide"
import { dataContext } from "../context"

const Category = () => {
  const { products, user, cart, setCart } = useContext(dataContext)

  const { category } = useParams()
  const [itemList, setItemList] = useState([])
  useEffect(() => {
    setItemList(products.filter(p => p.type === category))
  }, [products, category])

  return (
    <div className="d-flex flex-column align-items-center">
      <Slide />
      <div className="mt-2">
        <Card products={itemList} user={user} cart={cart} setCart={setCart} />
      </div>
    </div>
  )
}

export default Category
