import React from 'react';
import { motion } from 'framer-motion';

const eventData = [
  {
    title: 'Tech Conference 2025',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, urna eu tincidunt consectetur, nisi nisi cursus odio, sit amet tincidunt lorem ligula eu lorem.',
  },
  {
    title: 'Music Fest: Summer Beats',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, urna eu tincidunt consectetur, nisi nisi cursus odio, sit amet tincidunt lorem ligula eu lorem.',
  },
  {
    title: 'Startup Pitch Night',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, urna eu tincidunt consectetur, nisi nisi cursus odio, sit amet tincidunt lorem ligula eu lorem.',
  },
  {
    title: 'Art Exhibition: Colors of Life',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, urna eu tincidunt consectetur, nisi nisi cursus odio, sit amet tincidunt lorem ligula eu lorem.',
  },
  {
    title: 'Food Carnival: Taste the World',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, urna eu tincidunt consectetur, nisi nisi cursus odio, sit amet tincidunt lorem ligula eu lorem.',
  },
  {
    title: 'Marathon for a Cause',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, urna eu tincidunt consectetur, nisi nisi cursus odio, sit amet tincidunt lorem ligula eu lorem.',
  },
];

const EventDetails = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-uppercase font-weight-bold"> Event Details</h2>

      <div className="row g-4">
        {eventData.map((event, index) => (
          <div className="col-md-4" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card shadow-lg border-0 rounded-3 h-100"
              style={{ transition: 'all 0.3s ease-in-out' }}
            >
             

              <div className="card-body">
                <h5 className="card-title text-center mb-3 text-primary">{event.title}</h5>
                <p className="card-text text-muted">{event.description}</p>
                <div className="text-center mt-3">
                  <button className="btn btn-outline-primary px-4 py-2" style={{ borderRadius: '25px' }}>
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
