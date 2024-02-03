import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
  const [name, setName] = useState(storedUserDetails ? storedUserDetails.name : '');
  const [email, setEmail] = useState(storedUserDetails ? storedUserDetails.email : '');
  const [password, setPassword] = useState(storedUserDetails ? storedUserDetails.password : '');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save edited details to localStorage
    localStorage.setItem('userDetails', JSON.stringify({ name, email, password }));
    alert('Changes saved successfully');
    setIsEditing(false);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Manage Profile</h1>
          <hr className="my-4" />
          <form className="mt-4">
            <div className="form-group row">
              <label htmlFor="first-name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  readOnly={!isEditing}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={!isEditing}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  readOnly={!isEditing}
                />
              </div>
            </div>
          </form>
          <div className="container flex-class">
            {isEditing ? (
              <>
                <button className="btn btn-primary btn-md mr-4" onClick={handleSave}>
                  Save
                </button>
                <button className="btn btn-primary btn-md mr-4" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </>
            ) : (
              <button className="btn btn-primary btn-md mr-4" onClick={handleEdit}>
                Edit
              </button>
            )}
            <Link className="btn btn-primary btn-md" to="/home" role="button">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;