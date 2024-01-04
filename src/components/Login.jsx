import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa"
import "../../src/pages/Register/register.css"


const Login = () => {
  return (
    <div className="login ">
      <div className="login__header">
        <h2>Expert registration on-going</h2>
        <form action="">
          <h3>Sign up to start selling on AutoSpare</h3>
          <input type="text" placeholder="Name"/>
          <input type="tel" placeholder="Enter your Number" />
          <input type="text" placeholder="Enter shop address"/>
          <button>Submit</button>
        </form>
      </div>
      <div className="login__container container">
        <div class="form__container sign-up">
        <form action="">
          <h2>Create an account with AutoSpare</h2>
          <div className="login__icons">
            <a href="./"><FaGooglePlusG/></a>
            <a href="./"><FaFacebookF/></a>
            <a href="./"><FaLinkedinIn/></a>
            <a href="./"><FaTwitterSquare/></a>
          </div>

          <span>Or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

     
      <div className="form__container sign-in">
        <form action="">
          <h2>Welcome Back to AutoSpare</h2>
          <div className="login__icons">
            <a href="./"><FaGooglePlusG/></a>
            <a href="./"><FaFacebookF/></a>
            <a href="./"><FaLinkedinIn/></a>
            <a href="./"><FaTwitterSquare/></a>
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="./" className="forget">Forgot Password?</a>
          <button className="login">Sign In</button>
        </form>
      </div>
      </div>


      <div className="login__toggle-container container">
        <div className="login__toggle">
           <div className=" toggle-panel login__toggle-left">
            <h2>Thank you for choosing Us</h2>
            <p>Do you what to get more Information about common car problems and how to fix it? </p>
            <button className="hide">Sign Up to AutoSpare Newsletter</button>
           </div>

           <div className="toggle-panel login__toggle-right">
            <h2>Public Information</h2>
            <p>AutoSpare do not broker, sell car parts unless otherwise noted. All repair and replacement car parts shown on this website are offered for sale by our experts.</p>
           </div>
       
      </div>


      </div>
    </div>
  )
}

export default Login




