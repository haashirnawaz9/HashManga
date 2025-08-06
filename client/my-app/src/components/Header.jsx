import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      setToken(null);
    }
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      setToken(null);
      navigate('/login');
      setDropdownOpen(false);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (dropdownOpen) setDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-3xl bg-opacity-95 z-50 shadow-lg p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-1.5 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg group-hover:from-red-400 group-hover:to-pink-500 transition-all duration-200">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-white text-xl font-bold tracking-tight group-hover:text-red-400 transition-colors duration-200">
              HashManga
            </h1>
          </Link>

          {/* Auth / User */}
          <div className="flex items-center space-x-4">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-4 py-1.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-red-500/25"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 rounded-full flex items-center justify-center border border-slate-600 transition-all duration-200"
                >
                  <User className="h-5 w-5 text-slate-300" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 w-48 z-50 overflow-hidden">
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-150 flex items-center space-x-2"
                      >
                        <span>Log out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Header;
