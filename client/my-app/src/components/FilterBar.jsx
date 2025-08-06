import React from 'react';
import { Filter } from 'lucide-react';

export const FilterBar = ({
  genres,
  selectedGenres,
  onGenreToggle,
  sortBy,
  onSortChange,
  showFilters,
  onToggleFilters
}) => {
  return (
    <div className="bg-gray-800 border-b border-gray-700 mt-[-100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Popular Shonen Manga</h2>
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-2 focus:border-red-500 focus:outline-none"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="rating">Sort by Rating</option>
              <option value="title">Sort by Title</option>
            </select>
            <button
              onClick={onToggleFilters}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

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
                  onClick={() => selectedGenres.forEach((genre) => onGenreToggle(genre))}
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
