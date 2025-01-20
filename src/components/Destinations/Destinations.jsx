import React, { useEffect, useState } from 'react';
import './Destinations.css';

function Destinations() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'FO8-n3ALMHNooutB3Ljvw5MEDeFgOMv1qPamjXbbz7c';
  const API_URL = `https://api.unsplash.com/search/photos?query=travel&client_id=${API_KEY}&per_page=12`;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const shuffledPlaces = shuffleArray(data.results); 
        setPlaces(shuffledPlaces);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching places:', error);
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  if (loading) {
    return <div className="loading">Loading destinations...</div>;
  }

  return (
    <section className="destinations">
      <h1 className="heading">Explore Stunning Destinations</h1>
      <p className="subheading">
        Discover some of the most breathtaking places around the world, curated
        just for you.
      </p>
      <div className="places-grid">
        {places.map((place) => (
          <div key={place.id} className="place-card">
            <img
              src={place.urls.small}
              alt={place.alt_description || 'Destination'}
              className="place-image"
            />
            <div className="place-info">
              <h3>{place.alt_description || 'Beautiful Destination'}</h3>
              <p>
                <span>📸</span> Photo by {place.user.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
