// src/components/forgotpassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import './ForgotPassword.css';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://password-rest.onrender.com/api/forgot-password', { email });
      setMessage('Reset link sent to your email.');
      setError('');
    } catch (err) {
      setError('Email not found.');
      setMessage('');
    }
  };

  return (
    <div className="forgot-password-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="primary" type="submit">
          Send Reset Link
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
