import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/courses.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
    }
    else {
      setError('')
    }
    form.reset()
   
    
  }
  return (
    <form onSubmit={handleFormSubmit} className="card-body lg:w-1/3 mx-auto px-30 bg-base-300 shadow-layer rounded mt-20">
      <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className='text-3xl font-semibold text-center'>Please <span className='text-yellow-500'>Login</span></h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
          {error && <small className='text-red-600'>{error}</small>}
          </label>
          <label className="label">
            <Link className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
      </div>
      <div>
        
      </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Login</button>
        </div>
      </form>
  );
};

export default Login;