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
    <div className="bg-gray-800 border-b border-gray-700 rounded-2xl shadow-md mt-[-110px]">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-bold text-white">Shonen Manga</h2>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 w-full sm:w-auto">

            {/* Desktop Search (like old Header.jsx) */}
            <div className="hidden sm:block">
              <div className="relative w-64 group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search your favorite manga..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-red-500/30 focus:border-red-500/50 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-2 focus:border-red-500 focus:outline-none w-full sm:w-auto mt-2 sm:mt-0"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="rating">Sort by Rating</option>
              <option value="title">Sort by Title</option>
            </select>

            {/* Filter Button */}
            <button
              onClick={onToggleFilters}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mt-2 sm:mt-0"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            {/* Mobile Search Toggle */}
            <div className="block sm:hidden ml-auto mt-2 sm:mt-0">
              {!showMobileSearch ? (
                <button
                  onClick={() => setShowMobileSearch(true)}
                  className="p-2 rounded-full hover:bg-gray-700 transition-all"
                >
                  <Search className="h-5 w-5 text-gray-300" />
                </button>
              ) : (
                <div className="flex items-center space-x-2 w-full mt-2">
                  <div className="relative flex-grow group">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search your favorite manga..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-red-500/30 focus:border-red-500/50 focus:outline-none transition-all duration-200"
                    />
                  </div>
                  <button
                    onClick={() => setShowMobileSearch(false)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-all"
                  >
                    <X className="h-5 w-5 text-gray-300" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="border-t border-gray-700 pt-4">
            <h3 className="text-white font-medium mb-3">Filter by Genre:</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => onGenreToggle(genre)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedGenres.includes(genre)
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {genre}
                </button>
              ))}
              {selectedGenres.length > 0 && (
                <button
                  onClick={() =>
                    selectedGenres.forEach((genre) => onGenreToggle(genre))
                  }
                  className="px-3 py-2 bg-gray-600 text-gray-300 rounded-lg text-sm hover:bg-gray-500 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
