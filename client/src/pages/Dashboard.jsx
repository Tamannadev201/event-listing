import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dummyUser from '../data/dummyUser';
import dummyEvents from '../data/dummyEvents';
import useBookmarkStore from '../store/bookmarkStore';

const Dashboard = () => {
  const { bookmarks, setBookmarkedEvents } = useBookmarkStore();

  const [user, setUser] = useState(null);

  const saved = user
    ? dummyEvents.filter(event => bookmarks.some(e => e.id === event.id))
    : [];

  const created = user
    ? dummyEvents.filter(event => user.createdEvents?.includes(event.id))
    : [];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      setUser(null);
    }
  }, []);

  // Handle bookmark logic
  const handleBookmark = (event) => {
    const isAlreadyBookmarked = bookmarks.some(e => e.id === event.id);
    
    if (isAlreadyBookmarked) {
      setBookmarkedEvents(bookmarks.filter(e => e.id !== event.id));
    } else {
      setBookmarkedEvents([...bookmarks, event]);
    }
  };

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <h2>Please Login First</h2>
        <Link to="/login" className="btn btn-primary mt-3">Go to Login</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8345/8345328.png"
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: '100px', height: '100px' }}
              />
              <h4 className="card-title mb-1">{user.name}</h4>
              <p className="card-text text-muted">{user.email}</p>
              <p className="card-text"><small className="text-muted">{user.country}</small></p>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-warning text-dark">
              Saved Events
            </div>
            <div className="card-body">
              {saved.length === 0 ? (
                <p>No saved events.</p>
              ) : (
                <ul className="list-group">
                  {saved.map(event => (
                    <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="me-2">{event.title}</span>
                      <Link to={`/event/${event.id}`} className="btn btn-sm btn-outline-primary">
                        View
                      </Link>
                      <i
                        className={`bi ${bookmarks.some(e => e.id === event.id) ? 'bi-heart-fill' : 'bi-heart'}`}
                        style={{
                          color: bookmarks.some(e => e.id === event.id) ? 'red' : 'gray',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleBookmark(event)}
                      ></i>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              Your Created Events
            </div>
            <div className="card-body">
              {created.length === 0 ? (
                <p>You haven’t created any events yet.</p>
              ) : (
                <ul className="list-group">
                  {created.map(event => (
                    <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
                      {event.title}
                      <Link to={`/event/${event.id}`} className="btn btn-sm btn-outline-light">
                        Edit / View
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
