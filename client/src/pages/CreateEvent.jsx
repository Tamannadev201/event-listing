import React, { useState } from 'react';
import useAuthStore from '../store/authStore';

const CreateEvent = () => {
  const { user, login } = useAuthStore();
  const [form, setForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    image: '',
    description: '',
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false);

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginForm.email, loginForm.password);
    setIsLoggedIn(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', form);
    alert('Event Created Successfully!');
  };

  if (!isLoggedIn) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h2 className="text-center mb-4">Please Log in to Create an Event</h2>
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Create Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Event Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter event title"
                  className="form-control"
                  onChange={handleChange}
                  value={form.title}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label">Event Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="form-control"
                  onChange={handleChange}
                  value={form.date}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="time" className="form-label">Event Time</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="form-control"
                  onChange={handleChange}
                  value={form.time}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="location" className="form-label">Event Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter event location"
                  className="form-control"
                  onChange={handleChange}
                  value={form.location}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">Event Image URL</label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Enter image URL"
                  className="form-control"
                  onChange={handleChange}
                  value={form.image}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Event Description</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Enter event description"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                  value={form.description}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100">Create Event</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
