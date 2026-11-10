import React from 'react'; 

import { Link } from 'react-router-dom'; 

  

const NotFound = () => { 

  return ( 

    <div className="notfound-container"> 

      <div className="notfound-card"> 

        <h1 className="error-code">404</h1> 

        <h2>Destination Not Found</h2> 

        <p> 

          Looks like you've wandered off the trail! The page you are looking for doesn't exist or has moved. 

        </p> 

        <Link to="/" className="home-btn">Return to Home Page</Link> 

      </div> 

    </div> 

  ); 

}; 

  

export default NotFound; 