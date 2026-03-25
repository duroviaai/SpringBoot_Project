import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import SuccessPage from './components/SuccessPage';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);

  const API_BASE_URL = 'http://localhost:8080/api/users';

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentView('success');
    }
  }, []);

  const handleRegister = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.data.success) {
        return { success: true, data: response.data.data };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.data.success) {
        return { success: true, data: response.data.data };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const handleSuccess = (userData) => {
    setUser(userData);
    setCurrentView('success');
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
    localStorage.removeItem('user');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {currentView !== 'success' ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md">
              {currentView === 'login' ? (
                <LoginForm
                  onLoginSuccess={handleSuccess}
                  onSwitchToRegister={() => setCurrentView('register')}
                  onLogin={handleLogin}
                />
              ) : (
                <RegisterForm
                  onRegisterSuccess={handleSuccess}
                  onSwitchToLogin={() => setCurrentView('login')}
                  onRegister={handleRegister}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <SuccessPage user={user} onLogout={handleLogout} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;