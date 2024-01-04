import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/About/about";
import Shop from "./pages/Shop/shop";
import Contact from "./pages/Contact/contact";
import Experts from "./pages/Expert/expert";
import Register from "./pages/Register/register";
import NotFound from "./pages/notFound/notFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="experts" element={<Experts/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
