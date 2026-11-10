import React from 'react'; 

  

const About = () => { 

  return ( 

    <div className="page-container"> 

      <div className="about-header"> 

        <h1>About Horizon Travel</h1> 

        <p>Connecting travelers to extraordinary destinations worldwide since 2015.</p> 

      </div> 

  

      <div className="about-flex"> 

        <div className="about-text"> 

          <h2>Our Philosophy</h2> 

          <p> 

            At Horizon Travel, we believe travel is more than visiting new places—it is about  

            broadening perspectives, supporting local communities, and building lasting memories. 

          </p> 

          <p> 

            Our dedicated team handles every detail, ensuring seamless booking and  

            unmatched travel comfort from takeoff to landing. 

          </p> 

        </div> 

        <div className="stats-box"> 

          <div className="stat-item"> 

            <h3>50+</h3> 

            <p>Countries Covered</p> 

          </div> 

          <div className="stat-item"> 

            <h3>12,000+</h3> 

            <p>Happy Travelers</p> 

          </div> 

          <div className="stat-item"> 

            <h3>24/7</h3> 

            <p>Customer Support</p> 

          </div> 

        </div> 

      </div> 

    </div> 

  ); 

}; 

  

export default About; 