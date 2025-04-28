import React from 'react';
import banner from '../assets/banner.jpg';

function Home() {
  console.log('Home component rendered');
  return (
    <div className="text-center">
      <h1 className="display-4 mt-4">Welcome to Eventify</h1>
      <p className="lead">Discover and save events around you!</p>
      <img
        src={banner}
        alt="Eventify Banner"
        className="img-fluid w-100"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />
    </div>
  );
}

export default Home;
