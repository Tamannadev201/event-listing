import React, { useState } from 'react';

const EventForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      date: '',
      time: '',
      location: '',
      category: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded w-50 mx-auto">
      <input name="name" className="form-control mb-2" placeholder="Event Name" value={formData.name} onChange={handleChange} />
      <input name="date" className="form-control mb-2" type="date" value={formData.date} onChange={handleChange} />
      <input name="time" className="form-control mb-2" type="time" value={formData.time} onChange={handleChange} />
      <input name="location" className="form-control mb-2" placeholder="Location" value={formData.location} onChange={handleChange} />
      <input name="category" className="form-control mb-2" placeholder="Category" value={formData.category} onChange={handleChange} />
      <textarea name="description" className="form-control mb-2" placeholder="Description" value={formData.description} onChange={handleChange} />
      <button type="submit" className="btn btn-primary">Create Event</button>
    </form>
  );
};

export default EventForm;
