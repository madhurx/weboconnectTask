import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthContext, { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePostPage from './pages/CreatePostPage';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <AuthProvider>

    
      <Routes>
        <Route path="/" element={<PrivateRoute><Navbar /><HomePage /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-post" element={<PrivateRoute><Navbar /><CreatePostPage /></PrivateRoute>} />
      </Routes>
    </AuthProvider>

  </Router>
);

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  return auth ? children : <Navigate to="/login" />;
};

export default App;
