
// import Hero from "./Hero";
// import Navbar from "./Navbar";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "./Footer";
import AboutUs from "../components/AboutUs";
function About(){
    return (
    
        <>
        
<Navbar/>
<Hero 
cName="hero-mid"
heroImg= {AboutImg}
title="About"


btnClass="hide"
/>  
<AboutUs/>
       <Footer/>
       
        </>
    )
    }
    
    export default About;