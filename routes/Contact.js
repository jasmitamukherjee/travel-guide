
// import Hero from "../Hero";
// import Navbar from "../Navbar";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import AboutImg from "../assets/11.jpg";
import Footer from "./Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    return (
    
        <>
             
<Navbar/>
<Hero 
cName="hero-mid"
heroImg= {AboutImg}
title="Contact"


btnClass="hide"
/>
<ContactForm/>
<Footer/>
    
        </>
    )
    }
    
    export default Contact;

