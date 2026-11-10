import React from 'react'; 

import { Link, useLocation } from 'react-router-dom'; 

  

const Navbar = () => { 

  const location = useLocation(); 

  

  return ( 

    <header className="navbar-container"> 

      <div className="navbar-brand"> 

        <span className="brand-logo">✈️</span> Horizon Travel 

      </div> 

      <nav className="nav-links"> 

        <Link  

          to="/"  
             className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 

        > 

          Home 

        </Link> 

        <Link  

          to="/about"  

          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 

        > 

          About Us 

        </Link> 

      </nav> 

    </header> 

  ); 

}; 

  

export default Navbar; 