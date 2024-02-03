import React, { useState } from 'react';
import './SignUpLogin.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginFun = () => {
    // Check if all required fields are filled
    if (email && password) {
      // Retrieve user details from localStorage
      const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

      if (storedUserDetails && storedUserDetails.email === email && storedUserDetails.password === password) {
        // Redirect to home page if details match
        navigate('/home');
      } else {
        // Handle incorrect credentials (you can show an error message or perform other actions)
        alert('Incorrect email or password');
      }
    } else {
      // Inform the user to fill in all details
      alert('Please fill in all details to log in.');
    }
  };
  return (
    <div className='container'>
       <div className="header">
        <div className="text">
            <h1 id='heading-text' className='mt-3 mb-3'>Login</h1>
        </div>
      </div>
      <form className='mt-4'>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
        </div>
      
        <div className="form-group row">
          <div className="col-sm-10 center">
            <Link className="btn btn-primary btn-md submit-after mr-4" to="/signUp" role="button">Sign Up</Link>
            <button className="btn btn-primary btn-md submit-after" role="button" onClick={loginFun}>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;