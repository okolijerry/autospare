

import { FaArrowCircleRight } from "react-icons/fa"
import Image from "../images/support4.jpg"

import "../pages/home/home.css"



const Support = () => {
  return (
    <div className="customised">
   <div className="container customised__support">
    <div className="customised__support-header">
      <h2>Customised Support</h2>
      <h4>With a very wide variety of selection, your repair and replacement spare parts are just a few clicks away </h4>
    </div>
    <div className="search__guide">
        
    
       <p>Find spare-parts with</p>

    <ul className="spareparts__search">
      
      <li>Shop by Brand</li>
      <li>Shop by Year</li>
      <li> Shop by Fuel-Type</li>
      <li> Shop by Transmission</li>
      <li>Shop by Engine</li>

    </ul>
    
    </div>
    <button className="dell">
     <p>Learn More About how we save time with customised support</p>
     <img src={Image} alt="" />
     </button>

    <p className="lonely">A quick checkout guide <FaArrowCircleRight/></p>
   </div>
   </div>
  )
}

export default Support