
import Gallery from "../../components/Gallery"
import "../../components/MainHeader"
import MainHeader from "../../components/MainHeader"
import Spare from "../../components/Spare"
import Support from "../../components/Support"
import "./home.css"
const home = () => {
  return (

    <>
      <MainHeader/>
      <Spare/>
      <Support/>
      <Gallery/>
      
    </>
   
  )
}

export default home