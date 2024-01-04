

import Image from "../images/support1.jpg"
import { FaArrowCircleRight, FaBrush, FaWhatsapp } from "react-icons/fa"
import "../../src/pages/Contact/contact.css"


import React from 'react'

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__container">
     
     <div className="contact__header">
       <div className="asd">
      <img src={Image} alt="" />
      <p>Contact an Expert now for your repair and replacement car parts</p>
      </div>

      <div className="inStore">

      <p>found what your need?</p>
        <p>find a store for in-store purchase<FaArrowCircleRight/></p>
       
        <input type="search" placeholder="Search for" />
      </div>
     </div>
         
         <article>Enter car details to find product you need and get it delivered to you</article>
         <div className="labell">
          <div className="they">
        <label htmlFor="carBrand">
        <h3>Brand</h3>
        </label>
          <select name="brand" id="carBrand" defaultValue="" >
           
            <option value="Acura" >Acura</option>
            <option value="Audi" >Audi</option>
            <option value="BMW" >Acura</option>
            <option value="Dodge" >Dodge</option>
            <option value="Fiat" >Fiat</option>
            <option value="GMC" >GMC</option>
            <option value="Cadilac" >Cadilac</option>
            <option value="Chevrolet" >Chevrolet</option>
            <option value="Chrysler" >Chrysler</option>
            <option value="Ford" >Ford</option>
            <option value="Honda" >Honda</option>
            <option value="Hyndai" >Hyndai</option>
            <option value="Infiniti" >Infiniti</option>
            <option value="Jagua" >Jagua</option>
            <option value="Kia" >Kia</option>
            <option value="Land Rover" >Land Rover</option>
            <option value="Lexus" >Lexus</option>
            <option value="Mazda" >Mazda</option>
            <option value="Mercedes-Benz" >Mercedes-Benz</option>
            <option value="Mini" >Mini</option>
            <option value="Mitsubishi" >Mitsubishi</option>
            <option value="Nissan" >Nissan</option>
            <option value="Pontiac" >Pontiac</option>
            <option value="Peugeot" >Peugeot</option>
            <option value="Saab" >Saab</option>
            <option value="Subaru" >Subaru</option>
            <option value="Suzuki" >Suzuki</option>
            <option value="Toyota" >Toyota</option>
            <option value="VolksWagen" >VolksWagen</option>
            <option value="Volvo" >Volvo</option>
           
          </select>
          </div>

          <div className="we">
          <label htmlFor="input">
            Type
          </label>

          <input type="text" id="input"  placeholder="Enter car type"/>
            </div>
            <div className="them">
          <label htmlFor="year">
            <h3>Year</h3>
            </label>
            <select name="selectedModel" id="year" defaultValue={<FaBrush/>}>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">1990</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>


              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>

              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>

              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>

            </select>
            </div>
          
          <input type="submit"  placeholder="submit" className="omor"/>
          </div>



      </div>
        <div className="quote">
       <a href="tel:+2349025579441"><FaWhatsapp /></a> 

        </div>

        <div className="form__container">
          <article>
            <p>We would love to hear from you</p>
            <p>Send us your feedback</p>
          </article>
            
            <form action="" className="form">
              <input type="text" id="name" placeholder="Enter your name"/>
              <label htmlFor="name"></label>
              <input type="email" id="email" placeholder="Enter your email"/>
              <label htmlFor="email"></label>
              <input type="text" id="text" placeholder="Enter Message" />
              <label htmlFor="text"></label>
            </form>
        
        </div>
        
      <small className="contact__end">Submit</small>
          
    </div>

  
  )
}

export default Contacts