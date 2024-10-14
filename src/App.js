import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/UserRegistration/Register';
import CreateProperty from './components/CreateProperty/CreateProperty';
import LoginUser from './components/LoginUser/LoginUser';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/myprofile" element={<UserProfile />} />
        <Route path="/postproperty" element={<CreateProperty />} />
      </Routes>
    </Router>
  );
}

export default App;