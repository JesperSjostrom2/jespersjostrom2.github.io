import React from 'react'
import './footer.css'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer class="footer">
      <div className="footer-text">
        <p>Jesper Sjöström - Last updated 2023-05-18 </p>
      </div>

      <div className="footer-iconTop">
        <a href="#home"><AiOutlineArrowUp className="arrow-up"/></a>
      </div>

    </footer>
  )
}

export default Footer