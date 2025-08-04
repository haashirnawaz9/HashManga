import React from 'react';
import { Star, BookOpen, Eye } from 'lucide-react';

export const MangaCard = ({ manga, onClick }) => {
  return (
    <div
      onClick={onClick}
      className= "rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
    >
      <div className="relative overflow-hidden">
        <img
          src={manga.coverImage}
          alt={manga.title}
          className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            manga.status === 'ongoing' 
              ? 'bg-green-500 text-white' 
              : 'bg-blue-500 text-white'
          }`}>
            {manga.status === 'ongoing' ? 'Ongoing' : 'Completed'}
          </span>
        </div>
        <div className="absolute bottom-2 left-2 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-1 bg-black/70 rounded px-2 py-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">{manga.rating}</span>
          </div>
          <div className="flex items-center space-x-1 bg-black/70 rounded px-2 py-1">
            <Eye className="h-4 w-4 text-gray-300" />
            <span className="text-white text-sm">{manga.popularity}%</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-1 line-clamp-1 group-hover:text-red-400 transition-colors">
          {manga.title}
        </h3>
        <p className="text-gray-400 text-sm mb-2">by {manga.author}</p>
        <p className="text-gray-300 text-sm line-clamp-2 mb-3">
          {manga.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {manga.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400 text-sm">{manga.chapters.length} chapters</span>
          </div>
          <button className="text-red-500 hover:text-red-400 font-medium text-sm transition-colors">
            Read Now →
          </button>
        </div>
      </div>
    </div>
  );
};
