import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { pay } from "../services/product"
import { updateCart } from "../services/product"
import { dataContext } from "../context"

const Cart = () => {
  const { user, cart, setCart } = useContext(dataContext)
  const [html, setHtml] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (document.getElementById("_form_aiochk")) {
      document.getElementById("_form_aiochk").submit()
    }
  }, [html])

  const sum = cart.reduce((a, b) => {
    return a + b.price
  }, 0)

  const handleDelete = item => {
    const newCart = cart.filter(i => i !== item)
    setCart(newCart)
    updateCart(newCart)
  }

  const handlePay = () => {
    pay(cart, sum)
      .then(res => {
        console.log(res.data)
        setHtml(res.data)
      })
      .catch(err => console.log(err))
    setLoading(true)
  }

  return (
    <>
      {/* {html ? (
        <Result html={html} />
      ) : ( */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="p-3 m-4">
        {user ? (
          <div className="d-flex flex-column align-items-center">
            {cart.length > 0 ? (
              <>
                <table className="table mb-5">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">品名</th>
                      <th scope="col">圖片</th>
                      <th scope="col">價格</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(item => (
                      <tr key={item._id} className="">
                        <th scope="row"></th>
                        <td className="align-middle">{item.name}</td>
                        <td>
                          <img
                            style={{ width: "50px" }}
                            src={
                              process.env.REACT_APP_API_URL +
                              "/product/image/" +
                              item._id
                            }
                            alt=""
                          />
                        </td>
                        <td className="align-middle">{item.price}</td>
                        <td className="align-middle">
                          <button
                            onClick={() => {
                              handleDelete(item)
                            }}
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                          ></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>{" "}
                <h4>
                  總計 :{"    "}
                  {sum}
                  {"    "}元
                </h4>
                <a
                  href="#"
                  onClick={handlePay}
                  className="btn btn-lg btn-danger my-5"
                >
                  前往結帳
                </a>
                {loading && (
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                )}
              </>
            ) : (
              <>
                <h3>購物車為空</h3>
                <Link className="mt-5 btn btn-lg btn-danger" to="/">
                  回首頁
                </Link>
              </>
            )}
          </div>
        ) : (
          <div>請先登入</div>
        )}
      </div>
    </>
  )
}

export default Cart
