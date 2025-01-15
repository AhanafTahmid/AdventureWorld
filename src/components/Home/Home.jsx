import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Welcome to AdventureWorld</h1>
        <p>Discover breathtaking destinations and unforgettable experiences.</p>
        <button>Start Exploring</button>
      </div>
      <div className="feature-grid">
        <div className="feature">
          <h2>Top Destinations</h2>
          <p>Explore popular spots across the globe.</p>
        </div>
        <div className="feature">
          <h2>Exciting Tours</h2>
          <p>Adventure awaits on our handpicked tours.</p>
        </div>
        <div className="feature">
          <h2>Contact Us</h2>
          <p>We're here to help you plan your journey.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
