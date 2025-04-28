import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    country: 'Bangladesh',
    division: '',
    district: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
        setFormData({
          name: '',
          email: '',
          password: '',
          address: '',
          phoneNumber: '',
          country: 'Bangladesh',
          division: '',
          district: ''
        });
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#f7f7f7" }}>
      <div className="card p-4 shadow-sm" style={{ width: "450px" }}>
        <h3 className="text-center mb-4">Create an Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Division</label>
            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Division</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select District</option>
              {formData.division === 'Dhaka' && (
                <>
                  <option value="Dhaka City">Dhaka City</option>
                  <option value="Narayanganj">Narayanganj</option>
                  <option value="Gazipur">Gazipur</option>
                </>
              )}
              {formData.division === 'Chittagong' && (
                <>
                  <option value="Chittagong City">Chittagong City</option>
                  <option value="Cox's Bazar">Cox's Bazar</option>
                </>
              )}
              {formData.division === 'Rajshahi' && (
                <>
                  <option value="Rajshahi City">Rajshahi City</option>
                  <option value="Pabna">Pabna</option>
                </>
              )}
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
