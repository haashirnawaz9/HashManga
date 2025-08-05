import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';

const Header = ({ onSearchChange, searchQuery, onMenuToggle }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#202123] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[55px] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-red-500" />
          <h1 className="text-xl font-bold text-white">HashManga</h1>
        </div>

        {/* Center: Search (hidden on mobile) */}
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

        {/* Right: Auth menu */}
        <div className="flex items-center space-x-4">
          {!token ? (
            <>
              <Link to="/login" className="text-white hover:text-red-500">Login</Link>
              <Link to="/register" className="text-white hover:text-red-500">Register</Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="w-8 h-8 bg-cyan-950 rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold cursor-pointer">U</span>
              </button>
              {open && (
                <div className="absolute w-40 bg-gray-100 right-0 rounded-lg p-0.5 mt-2">
                  <button
                    onClick={Logout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile search bar */}
      {token && (
        <div className="sm:hidden px-4 pb-2 mt-1">
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
