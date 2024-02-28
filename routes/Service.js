// import Hero from "../Hero";
// import Navbar from "../Navbar";

import AboutImg from "../assets/10.jpg";
import Footer from "./Footer";
// import Trip from "../Trip";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
function Service(){
    return (
    
        <>
        
          
<Navbar/>
<Hero 
cName="hero-mid"
heroImg= {AboutImg}
title="Service"


btnClass="hide"
/>
<Trip/>
<Footer/>
    
    
        </>
    )
    }
    
    export default Service;