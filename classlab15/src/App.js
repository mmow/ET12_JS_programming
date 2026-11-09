
import './App.css';
import images from './images/girl.jpg'; 
import Navbars from './components/navbars';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const username ="user123"


      return (
        <>
        <div className="App">
          <BrowserRouter>
            <Navbars />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
          </div>
          <div className="App">
          <h1 style={{color: "blue", textAlign: "center"}}>Mamtaz A MOW</h1>
          <h2>WELCOME TO REACT JS </h2>
          <p>Embedded variable</p>
          <p>{username} user has id number {10+5}</p>


          <figure>
            <img src={images} alt="Girl" />
          </figure>
        </div>
        </>

      );
      
}


export default App;


