import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import main_logo from '/src/assets/main_logo.png'
import { faEnvelope, faMailBulk, faMailForward, faMailReply } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo-cont">
          <img className='footer-logo' src={main_logo} alt="" />
          <span className="logo-name">QUICK BILL</span>
          </div>
          <p>Manage your invoices and payments easily. Securely store customer data and payment information and access your billing information anytime, anywhere. Quick Bill offers secure and convenient billing management.</p>
        </div>
        <div className="footer-content-center">
          <h2>Product</h2>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Tutorials</li>
            <li>About us</li>
            <li>Pricing</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Social</h2>
          <ul>
            <li>+91 9949*****5</li>
            <li>contact@quickbill.com</li>
          </ul>
          <div className="footer-social_icons">
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      <hr className='hr-footer' />
      <div className="footer-copyright">
        Copyright 2024 @QUICKBILL.com-All Right Reserverd.</div>
    </div>
  )
}

export default Footer
