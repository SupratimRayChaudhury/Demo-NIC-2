// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="bg-white border-bottom shadow-sm py-2">
        <div className="container-fluid d-flex flex-column align-items-center text-center">
          <h5 className="fw-bold text-primary mb-0">Right to Information Online Portal</h5>
          <small className="text-muted">
            An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura
          </small>
        </div>
        <nav className="bg-primary mt-2">
          <ul className="nav justify-content-center text-white">
            <li className="nav-item">
              <button className="nav-link text-white btn btn-link" onClick={() => navigate('/dashboard')}>Dashboard</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white btn btn-link" onClick={() => navigate('/requests')}>Requests</button>
            </li>
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Search</button></li>
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Assignment</button></li>
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Utility</button></li>
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Reports</button></li>
            <li className="nav-item">
              <button className="nav-link text-white btn btn-link" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container py-5 flex-grow-1">
        <h2 className="mb-4">Welcome Back, Admin!</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-3">📝 Total Requests</h5>
                <p className="card-text fs-4">132</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-3">✅ Approved</h5>
                <p className="card-text fs-4 text-success">78</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold mb-3">⏳ Pending</h5>
                <p className="card-text fs-4 text-warning">54</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4>📢 Announcements</h4>
          <p className="text-muted">No announcements at the moment.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-2 mt-auto">
        <small>
          Copyright © 2025. All Rights Reserved.
          This portal is Maintained by Tripura Information Commission and Designed & Developed by National Informatics Centre, Tripura
        </small>
      </footer>
    </div>
  );
};

export default Dashboard;
