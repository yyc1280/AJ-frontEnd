import React from "react"

const Slide = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mb-3 w-75"
      data-bs-ride="carousel"
    >
      <div style={{ maxHeight: "300px" }} className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            className="d-block w-100"
            alt="pic1"
            style={{ marginTop: "-100px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            className="d-block w-100"
            alt="pic2"
            style={{ marginTop: "-200px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            className="d-block w-100"
            alt="pic3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slide
