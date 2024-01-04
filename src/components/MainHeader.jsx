import { Link } from "react-router-dom"

import { FaGooglePlay } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import "../pages/home/home.css"


const Header = () => {
  return (
   <header className="main__header">
    <div className="container main__header-container">
      <div className="main_text">
        <div className="h1">Browse.<span> Click.</span> <aside>Buy.</aside> </div>
       <div className="item__search">
        <div className="search__btn">search with customised support... <span>{<FaSearch/>}</span></div>
       <small>...While at the mechanic</small>
        </div>
        </div>
        <div className="header__links">
        <h2 className="about__text">
          AutoSpare is a convenient all in one auto repair and replacements parts Store, connecting Experts to Buyers.
        </h2>
      <div className="link">
      <Link to="/shop">
      <button>
        Shop Now
      </button>
      </Link>
      <button>
        {<FaGooglePlay/>} AutoSpare Mobile
      </button>
      </div>
      </div>
    </div>
   </header>
  )
}

export default Header