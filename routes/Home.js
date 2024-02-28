
// import Hero from "../components/Hero";
// import Destination from "../components/Destination";
// import Navbar from "../components/Navbar";
// import Trip from "../components/Trip";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";
// import Travel from "./Travel";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero
//         cName="hero"
//         heroImg="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
//         title="Your Journey Your Story"
//         text="Choose Your Favourite Destination."
//       />
     
//       <Destination />
//       <Trip />
//       <Link to="/travel"> 
//         <button className="nav-links travel-plan">
//           Travel Plan
//         </button>
//       </Link>
//       <Footer />
//     </>
//   );
// }

// export default Home;















// // import Hero from "../components/Hero";
// // import Destination from "../components/Destination";
// // import Navbar from "../components/Navbar";
// // import Trip from "../components/Trip";
// // import Footer from "./Footer";
// // import { Link } from "react-router-dom";
// // import Travel from "./Travel";
// // function Home(){
// // return (

// //     <>
// // <Navbar/>
// // <Hero 
// // cName="hero"
// // heroImg= "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
// // title="Your Journey Your Story"
// // text="Choose Your Favourite Destination."
// // // buttonText="Travel Plan"
// // // url="/"
// // // btnClass="show"
// // />
// // <Destination/>



// // <Trip/>


// // <Footer/>
// //     </>
// // )
// // }

// // export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination."
      />
      <Destination />
      <Trip />
      {/* <Link to="/travel">
        <button className="nav-links travel-plan">Travel Plan</button>
      </Link> */}
      <Footer />
    </>
  );
}

export default Home;
