
import Image1 from "../images/toyota.jpg"
import Image2 from "../images/kia.jpg"
import Image3 from "../images/mercedes.jpg"
import Image4 from "../images/bmw.jpg"
import Image5 from "../images/audi.jpg"
import Image6 from "../images/lexus.jpg"
import Image7 from "../images/mitsubishi.jpg"
import Image8 from "../images/vw.jpg"
import Image9 from "../images/honda.jpg"
import Image10 from "../images/tesla.jpg"



import "../pages/home/home.css"


const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container gallery__container">
        <h2><a href="./shop">Top Brands</a></h2>
        <div className="brand__list">
           <img src={Image1} alt="" />
          <img src={Image4} alt="" /> 
          <img src= {Image2} alt="" />
          <img src= {Image3} alt="" />
          <img src= {Image5} alt="" />
          <img src= {Image6} alt="" />
          <img src= {Image7} alt="" />
          <img src= {Image8} alt="" />
          <img src= {Image9} alt="" />
          <img src= {Image10} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery