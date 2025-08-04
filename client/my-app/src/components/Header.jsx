import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, BookOpen, Heart, Menu } from 'lucide-react';

const Header = ({ onSearchChange, searchQuery, onMenuToggle }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full shadow-lg absolute"
      style={{ backgroundColor: '#202123', height: '55px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left side: Menu button + Logo */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle button */}
          <button
            onClick={onMenuToggle}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-red-500" />
            <h1 className="text-xl font-bold text-white">HashManga</h1>
          </div>
        </div>

        {/* Center: Search bar (only show if logged in) */}
        {token && (
          <div className="flex-1 max-w-lg mx-8 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search manga..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                style={{ height: '35px' }}
              />
            </div>
          </div>
        )}

        {/* Right side: Login/Register or User Menu */}
        <div>
          {!token ? (
            <div className="flex gap-5 mr-5 text-white">
              <button>
                <Link to="/login">Login</Link>
              </button>
              <button>
                <Link to="/register">Register</Link>
              </button>
            </div>
          ) : (
            <div className="relative flex items-center justify-center mr-5" ref={menuRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center cursor-pointer w-8 h-8 bg-cyan-950 rounded-full"
              >
                <span className="text-white font-bold">U</span>
              </button>

              {open && (
                <div className="absolute w-40 mt-25 right-0 bg-gray-50 rounded-lg p-2 shadow-lg">
                  <button
                    onClick={Logout}
                    className="text-red-600 cursor-pointer text-md w-full text-left ml-2"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile search bar (only if logged in) */}
      {token && (
        <div className="sm:hidden px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search manga..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
              style={{ height: '35px' }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
