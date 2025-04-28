import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const EventCard = ({ event, handleBookmark }) => {
  const { id, title, category, date, location, description, image } = event;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    handleBookmark(event);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4 event-card">
      <div className="card shadow-sm h-100">
        <img src={image} alt={title} className="card-img-top img-fluid" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="text-muted"><strong>Date:</strong> {date}</p>
          <p className="text-muted"><strong>Location:</strong> {location}</p>
          <p className="text-muted"><strong>Category:</strong> {category}</p>

          <button
          className={`btn ${isBookmarked ? 'btn-danger' : 'btn-outline-primary'} mt-auto`}
          onClick={toggleBookmark}
          title={isBookmarked ? 'Remove from Bookmarks' : 'Add to Bookmarks'}
        >
          {isBookmarked ? (
           <FaBookmark style={{ fontSize: '1.2rem' }} />  
          ) : (
            <FaRegBookmark style={{ fontSize: '1.2rem' }} />
          )}
        </button>

        </div>
      </div>
    </div>
  );
};

export default EventCard;
