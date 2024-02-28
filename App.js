
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './routes/About';
// import Home from './components/routes/Home';
// import Service from './routes/Service';

// import Contact from './components/routes/Contact';
// import Signup from './components/routes/Signup';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Signup from './routes/Signup';
import Travel from './routes/Travel';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/travel" component={<Travel/>} />

        <Route/>
      </Routes>
      
      
      
       
      
      
    </div>
  );
}

export default App;
