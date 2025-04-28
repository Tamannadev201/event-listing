import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          Eventify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events" className="nav-link">Events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events/1" className="nav-link">Event Details</NavLink>
            </li>


            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create-event" className="nav-link">Create Event</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
