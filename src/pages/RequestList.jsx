import React from 'react';
import { useNavigate } from 'react-router-dom';

const dummyRequests = [
  { id: 1, name: 'John Doe', status: 'Pending', date: '2025-06-01' },
  { id: 2, name: 'Jane Smith', status: 'Approved', date: '2025-06-02' },
  { id: 3, name: 'Alice Johnson', status: 'Rejected', date: '2025-06-03' },
];

const RequestList = () => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/request/${id}`);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">List of Requests</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyRequests.map(req => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.name}</td>
                <td>{req.status}</td>
                <td>{req.date}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleView(req.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestList;
