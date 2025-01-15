import React from 'react';
import './Tours.css';

function Tours() {
  return (
    <section id="tours" className="tours">
      <h2 className="tours-heading">Featured Tours</h2>
      <p className="tours-subheading">Embark on unforgettable adventures crafted just for you.</p>
      <div className="tours-grid">
        <div className="card">
          <h3>Wildlife Safari</h3>
          <p>Get up close with nature's most fascinating creatures.</p>
          <button className="btn">Learn More</button>
        </div>
        <div className="card">
          <h3>Mountain Expedition</h3>
          <p>Challenge yourself with a thrilling mountain climb.</p>
          <button className="btn">Learn More</button>
        </div>
        <div className="card">
          <h3>Cultural Journey</h3>
          <p>Discover the rich heritage and traditions of exotic locales.</p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Tours;
