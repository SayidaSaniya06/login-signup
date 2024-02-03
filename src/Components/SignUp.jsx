import React, { useState } from 'react';
import './SignUpLogin.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const signUpFun = () => {
    // Check if all required fields are filled
    if (name && email && password && agreed) {
      // Store user details in localStorage
      localStorage.setItem('userDetails', JSON.stringify({ name, email, password }));
      console.table(name, email, password);
      // Redirect to login page after sign up
      navigate('/login');
    } else {
      // Inform the user to fill in all details
      alert('Please fill in all details and agree to the terms and conditions to sign up.');
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">
          <h1 id='heading-text' className='mt-3 mb-3'>Sign Up</h1>
        </div>
      </div>
      <form className='mt-4'>
        <div className="form-group row">
          <label htmlFor="first-name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="first-name" value={name} onChange={(e) => { setName(e.target.value) }} required />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1" checked={agreed} onChange={() => setAgreed(!agreed)} required />
              <label className="form-check-label" htmlFor="gridCheck1">
                I agree terms and conditions
              </label>
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10 center">
            <button className="btn btn-primary btn-md submit-after"  role="button" onClick={signUpFun}>Sign up</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;