import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PasswordReset from './components/PasswordReset';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password-reset" element={<PasswordReset />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
