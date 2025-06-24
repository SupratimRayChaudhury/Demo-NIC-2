// src/pages/RequestDetails.jsx
import React from 'react';

const RequestDetails = () => {
  // You can later pass data via props or route params
  return (
    <div className="container py-4">
      <h2 className="mb-4">Request Details</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Request ID</label>
          <input type="text" className="form-control" value="12345" readOnly />
        </div>

        <div className="mb-3">
          <label className="form-label">Applicant Name</label>
          <input type="text" className="form-control" value="John Doe" />
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select className="form-select">
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Remarks</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default RequestDetails;
