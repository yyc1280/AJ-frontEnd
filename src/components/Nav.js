import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { logout } from "../services/auth"
import { dataContext } from "../context"

const Nav = () => {
  const { user, setUser, cart } = useContext(dataContext)

  const handleLogout = () => {
    logout()
      .then(() => {
        setUser(null)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          A&J Boutique
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                所有商品
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/product/dress"
              >
                洋裝
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/product/shirt"
              >
                上衣
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/product/bag">
                包包
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/product/bottom"
              >
                褲/裙
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/product/accessories"
              >
                飾品
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <p className="mb-0 text-white nav-link">您好! {user.name}</p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/cart">
                    購物車
                    {cart.length > 0 && (
                      <span className="px-1 ms-1 bg-danger">{cart.length}</span>
                    )}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/record">
                    訂單紀錄
                  </Link>
                </li>
                <li onClick={handleLogout} className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    登出
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`${process.env.REACT_APP_API_URL}/auth/google`}
                >
                  <img
                    className="mb-1"
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt=""
                  />
                  以Google登入
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
