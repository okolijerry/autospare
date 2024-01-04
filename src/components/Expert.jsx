import Image from "../images/support4.jpg"

import "../pages/Expert/expert.css"


const Expert = () => {
  return (
    <div className="expert">
      <div className="expert__container ">
        <h1>No middle-man, No extra-cost, 0% Overcharge</h1>
        <div className="container expert__header">
          <div className="flex">
        <img src={Image} alt="" />
       <h2>Connect with an AutoSpare Expert today for a hassle-free ride to the workshop</h2>
       </div>
        <div className="flexoo">
       <p>
        AutoSpare is dedicated to providing high quality products with fair prices and customer satisfaction guarantee.
       </p>
       <p>
       Certified Experts at AutoSpare have upon registration agreed to partner with us to deliver on this promise for a better and more efficient means to selling car parts.
       </p>
       </div>

    </div>
      
      </div>
    </div>
  )
}

export default Expert