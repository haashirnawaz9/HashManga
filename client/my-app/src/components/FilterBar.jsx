import React, { useState } from 'react';
import { Filter, Search, X } from 'lucide-react';

export const FilterBar = ({
  genres,
  selectedGenres,
  onGenreToggle,
  sortBy,
  onSortChange,
  showFilters,
  onToggleFilters,
  searchQuery,
  onSearchChange,
}) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 shadow-xl rounded-xl mt-[-110px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col space-y-4">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-8 bg-red-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Popular Shonen Manga</h2>
            </div>

            {/* Mobile Search Toggle */}
            <div className="block sm:hidden">
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Controls Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Desktop Search */}
            <div className="hidden sm:block flex-1 max-w-md">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors duration-200 group-focus-within:text-red-400" />
                <input
                  type="text"
                  placeholder="Search your favorite manga..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-gray-700/50 backdrop-blur-sm text-white pl-12 pr-4 py-3 rounded-xl border border-gray-600/50 placeholder-gray-400 focus:ring-2 focus:ring-red-500/30 focus:border-red-500/50 focus:outline-none focus:bg-gray-700 transition-all duration-200 hover:border-gray-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-3">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="appearance-none bg-gray-700/50 backdrop-blur-sm text-white border border-gray-600/50 rounded-xl px-4 py-3 pr-10 focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all duration-200 hover:border-gray-500 cursor-pointer"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="title">Sort by Title</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Filter Button */}
              <button
                onClick={onToggleFilters}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                  showFilters
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                    : 'bg-gray-700/50 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gray-600/50 border border-gray-600/50'
                }`}
              >
                <Filter className="h-5 w-5" />
                <span className="hidden sm:inline">Filters</span>
                {selectedGenres.length > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center">
                    {selectedGenres.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {showMobileSearch && (
            <div className="sm:hidden">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors duration-200 group-focus-within:text-red-400" />
                <input
                  type="text"
                  placeholder="Search your favorite manga..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-gray-700/50 backdrop-blur-sm text-white pl-12 pr-12 py-3 rounded-xl border border-gray-600/50 placeholder-gray-400 focus:ring-2 focus:ring-red-500/30 focus:border-red-500/50 focus:outline-none focus:bg-gray-700 transition-all duration-200"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setShowMobileSearch(false);
                    onSearchChange('');
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Filter by Genre</h3>
              {selectedGenres.length > 0 && (
                <button
                  onClick={() => selectedGenres.forEach((genre) => onGenreToggle(genre))}
                  className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                >
                  Clear All ({selectedGenres.length})
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => onGenreToggle(genre)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedGenres.includes(genre)
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/25 scale-105'
                      : 'bg-gray-700/50 backdrop-blur-sm text-gray-300 hover:bg-gray-600/50 hover:text-white border border-gray-600/30 hover:border-gray-500/50'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Filters Summary */}
        {(searchQuery || selectedGenres.length > 0) && (
          <div className="mt-4 pt-4 border-t border-gray-700/30">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-400 text-sm">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center space-x-1 bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  <Search className="h-3 w-3" />
                  <span>"{searchQuery}"</span>
                  <button
                    onClick={() => onSearchChange('')}
                    className="hover:text-blue-200 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedGenres.map((genre) => (
                <span
                  key={genre}
                  className="inline-flex items-center space-x-1 bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-sm"
                >
                  <span>{genre}</span>
                  <button
                    onClick={() => onGenreToggle(genre)}
                    className="hover:text-red-200 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
