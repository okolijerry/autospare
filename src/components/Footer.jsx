import { Link } from "react-router-dom"

import Logo from "../images/aur9.jpg"

import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"


import "../pages/home/home.css"


const Footer = () => {
  return (
    <footer>
      <div className=" footer__container">
        <div>
        <Link to="./" className="logo"> <img src={Logo} alt="" />
          <h2>
            AutoSpare</h2></Link>
        </div>

        <article>
          <div className="shop">
            <h2>Shop</h2>
            <ul>
              <li>Account login 
              </li>
              <li>What is an AutoSpare Account</li>
              <li>Security</li>
            </ul>
          </div>
          </article>
        
        <article>
         
          
          <div className="support">
            <h2>Support</h2>
            <span>Contact Us</span>
            <span>Getting started</span>
            <span>Expert services</span>
          </div>
         
          </article>


        

          <article>
         

          <div className="company">
            <h2>Company</h2>
            <ul>
              <li>Our story</li>
              <li>Wishlist</li>
              <li>Professional Services</li>
            </ul>
          </div>
          </article>

         
          
          <article>
        <div className="customised__guide">
            <h2>AutoSpare Process</h2>
            <ul>
              <li>Input Category</li>
              <li>Choose Product</li>
              <li>Connect directly to an expert</li>
            </ul>
          </div>

         

        </article>

        <article>
         <p className="why">
            <h2>Why AutoSpare?</h2>
            <span>Fair and transparent pricing</span>
            <span>Fast and convenient delivery</span>
            <span>Best replacements Auto parts</span>
            <span>Stress free</span>
          </p>
         </article>

         <article>
        
          <div className="footer__socials">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><FaTwitter/></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><FaInstagram/></a>
          </div>
          
        
         
         </article>

          
        
        <article className="perma__links">
          <h3>Perma Links</h3>
          <Link to="./about">About</Link>
          <Link to="./shop">Shop</Link>
          <Link to="./experts">Experts</Link>
          <Link to="./contact">Contact</Link>
          <Link to="./register">Register</Link>
        </article>
          
           <article>
           <p>AutoSpare do not broker or sell auto spare parts unless otherwise stated. All repair and replacements parts shown on the website are offered for sale by our experts</p>
           </article>

          
      
      </div>

      <article>
          <div className="expert">
            <h2>Who is an Expert</h2>
            <p>An Expert is an auto spare-parts dealer who have been contractually
               obligated by AutoSpare to meet certain customer service reguirements, 
               completed AutoSpare certification program and has unquestionable knowledge of the brand they represent.</p>
          </div>
          </article>

      <div className="footer__copyright">
      
        
        <small>2024 AutoSpare &copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer