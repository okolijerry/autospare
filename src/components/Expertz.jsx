

import Image from "../images/together.jpg"
import { IoLogoWhatsapp } from "react-icons/io"
import "../pages/Expert/expert.css"


const Expertz = () => {
  return (
    <div className="expertz">
      <div className="expertz__container container">
        <h1>Working together breeds greatness</h1>
          <div className="together">
          <img src={Image} alt="" />
        <p>AutoSpare is the right place to sell your products as a car parts dealer, we want to encourage you
          to sell more through this platform and help us achieve our goal of providing the best to our customers today.
        </p>
          </div>
        

        <ul className="sneeze">
          <li>GET STARTED</li>
          <li>TO GET VERIFIED, CONTACT 
          <a href="https://wa.me/+2349025579441" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </li>
        </ul>

        <div className="itold">
        <h2 className="behave">Become an Expert today and Get introduced to new customers</h2>

        <h3 >Experts requirements</h3>
        <ol className="requirement">
         
          <li>Has High intelligence and experience on brands they represent</li>
          <li>Has a verifiable business location</li>
          <li>Has products of highest standards</li>
          <li>Agrees on product up-front prices that are still negotiable</li>
          <li>Agrees to provide clarity to buyers on products with details on warranty and returns.</li>
          <li>Is open to in-store purchase, and online delivery</li>
        </ol>
        </div>
      </div>
    </div>
  )
}

export default Expertz