import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const validate = () => {
    const errors = {email: '', password: ''};
    let isValid = true;
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }
    if (!formValues.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name='email' placeholder='xyz@gmail.com' value={formValues.email} onChange={handleChange} required />
          {errors.email && <p className="error">{errors.email}</p>}
          <br /><br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" name='password' placeholder='********' value={formValues.password} onChange={handleChange} required />
          {errors.password && <p className="error">{errors.password}</p>}
          <br /><br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}