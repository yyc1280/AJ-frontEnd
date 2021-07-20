import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import { authCheck } from "./services/auth"
import { getAllProducts, getCart, updateCart } from "./services/product"

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
  const [auth, setAuth] = useState(false)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    authCheck()
 
      .then(res => {
        setUser(res.data.user)
        setAuth(true)
      })
      .catch(err => {
        setUser(null)
        setAuth(false)
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
    <div className="h-100">
      <Nav user={user} auth={auth} setUser={setUser} cart={cart} />
      <Switch>
        <Route path="/" exact>
          <Home products={products} user={user} cart={cart} setCart={setCart} />
        </Route>
        <Route path="/cart" exact>
          <Cart user={user} cart={cart} setCart={setCart} />
        </Route>
        <Route path="/success" exact>
          <Success setCart={setCart} />
        </Route>
        <Route path="/product/:category" exact>
          <Category
            products={products}
            user={user}
            cart={cart}
            setCart={setCart}
          />
        </Route>
        <Route path="/record" exact>
          <Record user={user} />
        </Route>
        <Route path="/item/:_id" exact>
          <Product
            products={products}
            user={user}
            cart={cart}
            setCart={setCart}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
