import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PasswordReset.css';

function PasswordReset() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/reset-password/${token}`, { password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error resetting password');
    }
  };

  return (
    <div className="password-reset-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PasswordReset;
