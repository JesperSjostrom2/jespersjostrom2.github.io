import React from 'react'
import './footer.css'
import { AiOutlineArrowUp } from 'react-icons/ai'
import LastUpdated from './LastUpdated'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Jesper Sjöström. All rights reserved.</p>
        <LastUpdated />
      </div>

      <div className="footer-iconTop">
        <a href="#home"><AiOutlineArrowUp className="arrow-up"/></a>
      </div>

    </footer>
  )
}

export default Footer