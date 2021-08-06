import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import { authCheck } from "./services/auth"
import { getAllProducts, getCart } from "./services/product"
import { dataContext } from "./context"

import Nav from "./components/Nav"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import Success from "./components/Success"
import Category from "./components/Category"
import Record from "./components/Record"
import Product from "./components/Product"

const App = () => {
  const [user, setUser] = useState()
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const value = { user, setUser, products, setProducts, cart, setCart }

  useEffect(() => {
    authCheck()
      .then(res => {
        setUser(res.data.user)
      })
      .catch(err => {
        setUser(null)
      })
  }, [])
  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res.data))
      .catch(err => {
        console.log(err)
      })
    const LS = JSON.parse(getCart())
    if (LS) {
      setCart(LS)
    }
  }, [])

  return (
    <dataContext.Provider value={value}>
      <div className="h-100">
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/success" exact>
            <Success />
          </Route>
          <Route path="/product/:category" exact>
            <Category />
          </Route>
          <Route path="/record" exact>
            <Record />
          </Route>
          <Route path="/item/:_id" exact>
            <Product />
          </Route>
        </Switch>
        <Footer />
      </div>
    </dataContext.Provider>
  )
}

export default App
