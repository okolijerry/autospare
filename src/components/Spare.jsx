
import { Link } from "react-router-dom"
import Image from "../images/header-bg1.jpg"
import {TbMessages} from "react-icons/tb"
import "../pages/home/home.css"



const Spare = () => {
  return (
    <div className="description">
      <div className="container description__container">
        <div className="description__container-left">
          <h2>Best Deals for Everything Spare-parts</h2>
          <p>Find high quality auto wares for repair and replacements to improve your vehicle performance now.</p>
          <h3>Nothing New, Just Better. </h3>
          <button>
           <Link to="/expert" className="btn">
           <TbMessages/> Connect with an expert 
           </Link>
          </button>
        </div>
        <div className="description__container-right">
         <img src={Image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Spare