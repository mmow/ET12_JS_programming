import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      <section className="hero-banner">
        <h1>Explore the World with Horizon</h1>
        <p>
          Curated travel destinations, effortless planning, and unforgettable
          experiences.
        </p>
        <Link to="/about">Discover Our Mission</Link>
      </section>

      <section className="content-section">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="grid-container">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
              alt="Tropical Paradise"
              className="card-img"
            />
            <div className="card-body">
              <h3>Tropical Escapes</h3>
              <p>
                Relax on pristine white sand beaches with transparent turquoise
                waters.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
              alt="Mountain Expedition"
              className="card-img"
            />
            <div className="card-body">
              <h3>Alpine Adventures</h3>
              <p>
                Trek through scenic mountain peaks and breathtaking hiking
                trails.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=600&q=80"
              alt="Cultural Cities"
              className="card-img"
            />
            <div className="card-body">
              <h3>Cultural Hubs</h3>
              <p>
                Immerse yourself in rich history, architecture, and local
                cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
