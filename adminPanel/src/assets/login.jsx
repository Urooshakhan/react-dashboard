import React from 'react';

export default function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add real login logic here
    onLogin(); // Set logged in state
  };

  return (
    <div className="form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
