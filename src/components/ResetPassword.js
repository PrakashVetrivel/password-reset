// src/components/resetpassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import './ResetPassword.css';

const ResetPassword = ({ match }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      await axios.post(`https://password-rest.onrender.com/api/reset-password/${match.params.token}`, { password });
      setMessage('Password has been reset.');
      setError('');
    } catch (err) {
      setError('Invalid or expired reset link.');
      setMessage('');
    }
  };

  return (
    <div className="reset-password-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
