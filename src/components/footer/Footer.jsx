import React from 'react'
import './footer.css'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Jesper Sjöström - Last updated 2024-06-27 </p>
      </div>

      <div className="footer-iconTop">
        <a href="#home"><AiOutlineArrowUp className="arrow-up"/></a>
      </div>

    </footer>
  )
}

export default Footer