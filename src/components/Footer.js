import React from "react"
import line from "../images/line.png"

const Footer = () => {
  return (
    <footer style={{ width: "100px" }} className="fixed-bottom ms-auto">
      <a
        style={{ right: "24px", bottom: "100px" }}
        className="position-absolute"
        href="https://line.me/ti/p/L2OurwMBKW"
      >
        <img style={{ width: "60px" }} src={line} alt="line" />
      </a>
    </footer>
  )
}

export default Footer
