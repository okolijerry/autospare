
import "../pages/Shop/shop.css"
import Image from "../images/seller1.jpg"


const Search = () => {
  return (
    <div className="search">
      <div className="seller">
          <h2>What are you looking for?</h2>
         <img src={Image} alt="" />
        </div>
      <div className="container search__container">
        
        <input type="text" placeholder="search for..." />
        <div className="searchlist">
          <ul className="search-items">
            <li>Engines</li>
            <li>Wipers</li>
            <li>Clutch</li>
            <li>Bumper</li>
            <li>Steering Rags</li>
            <li>Wind Screen</li>     
            <li>Control Arm</li>
            <li>Shock absorbers</li>
            <li>Piston</li>
            <li>Air Filter</li>
            <li>Brake Pads</li>
            <li>Alternator</li>
            <li>Tires</li>
            <li>Cam shaft</li>
            
            <li>Catalytic Converter</li>
            <li>A/C Compressor</li>
            <li>Axle</li>
            <li>Radiator</li>
            <li>Gear Box</li>
            <li>Suspension</li>
            
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Search