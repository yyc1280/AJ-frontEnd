import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { updateCart } from "../services/product"
import { dataContext } from "../context"

const Success = () => {
  const { setCart } = useContext(dataContext)

  useEffect(() => {
    setCart([])
    updateCart([])
  }, [])
  return (
    <div className="h-75 p-5 d-flex align-items-center justify-content-center">
      <div className="container d-flex align-items-center flex-column">
        <h1>付款成功，敬請聯絡商店</h1>
        <Link className="mt-5 btn btn-lg btn-danger" to="/">
          回首頁
        </Link>
      </div>
    </div>
  )
}

export default Success
