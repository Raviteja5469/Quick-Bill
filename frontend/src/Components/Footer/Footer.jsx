import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer_content">
        <div className="footer_left">
          <img className='footer_logo' src="assets\logo.png" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur, ad ducimus nobis magnam deserunt veniam cupiditate eius quis, doloribus illum. Harum ut quos a mollitia natus, saepe dolor neque?  </p>
          <div className="footer_social_icons">
            <img src="assets\facebook_icon.png" alt="" />
            <img src="assets\linkedin_icon.png" alt="" />
            <img src="assets\twitter_icon.png" alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h2>QUICK BILL</h2>
          <ul>
            <li>Home.</li>
            <li>Features</li>
            <li>About</li>
            <li>Pricing</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9949*****5</li>
            <li>contact@quickbill.com</li>
          </ul>
        </div>
      </div>
      <hr className='hr_footer' />
      <p className="footer_copyright">
        Copyright 2024 @QUICKBILL.com-All Right Reserverd.
      </p>
    </div>
  )
}

export default Footer
