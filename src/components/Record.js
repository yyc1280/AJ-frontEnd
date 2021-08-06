import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { getRecord } from "../services/product"
import { dataContext } from "../context"

const Record = () => {
  const { user } = useContext(dataContext)
  const [records, setRecords] = useState([])
  useEffect(() => {
    getRecord()
      .then(res => {
        setRecords(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="py-5 m-4">
      {user ? (
        <div className="d-flex flex-column align-items-center">
          {records.length > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">品名</th>
                    <th scope="col">總計</th>
                    <th scope="col">日期</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map(item => (
                    <tr key={item._id} className="">
                      <th scope="row"></th>
                      <td className="align-middle">
                        {item.ItemName.join("、")}
                      </td>
                      <td>{item.TotalAmount}</td>
                      <td className="align-middle">{item.MerchantTradeDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <h3>尚無紀錄</h3>
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
    // <div>
    //   <table className="table mb-5">
    //     <thead>
    //       <tr>
    //         <th scope="col"></th>
    //         <th scope="col">品名</th>
    //         <th scope="col">總計</th>
    //         <th scope="col">日期</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {records.map(item => (
    //         <tr key={item._id} className="">
    //           <th scope="row"></th>
    //           <td className="align-middle">{item.ItemName}</td>
    //           <td>{item.TotalAmount}</td>
    //           <td className="align-middle">{item.MerchantTradeDate}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  )
}

export default Record
