import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "./Card"
import Slide from "./Slide"

const Category = ({ products, user, cart, setCart }) => {
  const { category } = useParams()
  const [itemList, setItemList] = useState([])
  useEffect(() => {
    setItemList(products.filter(p => p.type === category))
  }, [products, category])

  return (
    <div className="p-5 m-2 d-flex flex-column align-items-center">
      <Slide />
      <div className="mt-2">
        <Card products={itemList} user={user} cart={cart} setCart={setCart} />
      </div>
    </div>
  )
}

export default Category
