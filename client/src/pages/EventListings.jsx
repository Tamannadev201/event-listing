import React, { useState } from 'react';
import EventCard from '../components/feature/EventCard';
import dummyEvents from '../data/dummyEvents';

const EventListings = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [bookmarkedEvents, setBookmarkedEvents] = useState([]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleBookmark = (event) => {
    const isAlreadyBookmarked = bookmarkedEvents.some(e => e.id === event.id);
    
    if (isAlreadyBookmarked) {
      setBookmarkedEvents(bookmarkedEvents.filter(e => e.id !== event.id));
    } else {
      setBookmarkedEvents([...bookmarkedEvents, event]);
    }
  };

  const filteredEvents = dummyEvents.filter(event => {
    const matchesCategory = selectedCategory ? event.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    const matchesLocation = selectedLocation ? event.location.toLowerCase() === selectedLocation.toLowerCase() : true;
    return matchesCategory && matchesLocation; 
  });

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Upcoming Events</h2>

      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Filter by Category</option>
            <option value="Technology">Tech</option>
            <option value="Business">Business</option>
            <option value="Wedding">Wedding</option>
            <option value="Art">Art</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <select className="form-select" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">Filter by Location</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Jatrabari">Jatrabari</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} handleBookmark={handleBookmark} />
          ))
        ) : (
          <p className="text-center">No events found!</p>
        )}
      </div>
    </div>
  );
};

export default EventListings;
