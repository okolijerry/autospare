import Image from "../images/storyheader2.jpg"

import Image2 from "../images/story5.jpg"

import Image3 from "../images/story3.jpg"

import Image4 from "../images/Snapchat-2133574920.jpg"
 import { FaArrowRight} from "react-icons/fa"

import "../pages/About/about.css"


const Story = () => {
  return (
    <div className="story">
      <div className="story__container container">

        <div className="story__header">

          <div className="story__header-left">

             <h2>There's Alot To Love About AutoSpare</h2>

             <div className="story__header-lefty">
             <p>Simply put, AutoSpare is the one place for all your car repair and replacements alternate spare-parts needs.</p>
             <p>With a singular focus on providing quality products at low cost anytime, anywhere </p>
          </div>
          </div>

          <div className="story__header-right">
               
            <img src={Image} alt="" />

            <button>Ready for delivery <FaArrowRight/></button>

          </div>

        </div>


        <h3>Accessible at your convenience, Anytime, Anywhere </h3>

        <div className="story__header-two">
        <div className="story__one">
        <img src={Image2} alt="" />
       </div>

       <div className="story__two">
        <p>
         With the help of available technology we hope to transform alternate car parts buying from a closed, monopolised, stressful, overpriced process into a honest, striaghtforward, open experience that everybody deserves.
        </p>

        <p>
          Buying completely at you own terms, whether you order online, in-store, or using a seamless combination of both.
        </p>

        <p>
          We tell you where the best things are, the cost and how to get them.
        </p>
       </div>

        </div>


        <div className="story__header-three">

        <div className="story__four">
            <img src={Image3} alt="" />
          </div>
          <div className="story__three">
            <p>We are determined to radically minimize the over-inflated cost of alternate car parts by decentralising the existing imposed price monopoly, that are most times overly inflated by connecting car owners to dealers directly.</p>

            <p>Buy whatever you need to get your car running smoothly with just a click.</p>

            <button>Go to Shop now <FaArrowRight/></button>
          </div>

          
        </div>
       
        <div className="about-me">

          <div className="aboutme">
            <img src={Image4} alt="" />
          </div>
          <p className="myself">
          <h3>Founder, CTO</h3>
          <h3>Okoli Jerry Neche</h3>
          </p>
          
        </div>

      </div>
    </div>
  )
}

export default Story


