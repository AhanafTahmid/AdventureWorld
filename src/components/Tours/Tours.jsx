import React from 'react';
import './Tours.css';

function Tours() {
  return (
    <section id="tours" className="tours">
      <h2>Featured Tours</h2>
      <div className="row">
        <div className="card">
          <h5>Wildlife Safari</h5>
          <p>Get up close with nature's most fascinating creatures.</p>
          <button className="btn btn-warning">Learn More</button>
        </div>
        <div className="card">
          <h5>Mountain Expedition</h5>
          <p>Challenge yourself with a thrilling mountain climb.</p>
          <button className="btn btn-warning">Learn More</button>
        </div>
        <div className="card">
          <h5>Cultural Journey</h5>
          <p>Discover the rich heritage and traditions of exotic locales.</p>
          <button className="btn btn-warning">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Tours;
