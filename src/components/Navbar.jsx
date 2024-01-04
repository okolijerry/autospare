import { useState } from "react"

import {Link, NavLink} from "react-router-dom"
import Logo from "../images/aur9.jpg"
import {links} from "../data"
import {FaShoppingCart} from "react-icons/fa"
import {FaUser} from "react-icons/fa"
import {IoMdMenu} from "react-icons/io"
import {MdOutlineClose} from "react-icons/md"


import "./Navbar.css"
const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}> 
        <img src= {Logo} alt="" />
        <h2>Auto<span>Spare</span></h2>
        </Link>

       

        <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
          {
            links.map(({name, path}, index) => 
            {
              return (
                <li key={index}>
                  <NavLink to={path}
                  onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
                
              
            })
          }
        </ul>

        <ul className="user__login">
          <li className="user">
           <a href="./" target="_blank" ><FaShoppingCart className="user1"/></a>
          <a href="./" target="_blank"><FaUser className="user2"/></a>  
          </li>
          <li className="nav__toggle" onClick={() => setIsNavShowing(prev => !prev)}>
            {
              isNavShowing ?<MdOutlineClose/> : <IoMdMenu/>
            }
          </li>
          <li className="text">Trade</li>
        </ul>

        
      </div>
    </nav>
  )
}

export default Navbar