import React from 'react';
import { ArrowLeft, Star, BookOpen, Calendar, User, Tag } from 'lucide-react';

export const MangaDetail = ({ manga, onBack, onReadChapter }) => {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <img
          src={manga.coverImage}
          alt={manga.title}
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <button
          onClick={onBack}
          className="absolute top-4 left-4 flex items-center space-x-2 bg-black/50 text-white px-3 py-2 rounded-lg hover:bg-black/70 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={manga.coverImage}
              alt={manga.title}
              className="w-24 h-32 sm:w-32 sm:h-40 object-cover rounded-lg shadow-2xl"
            />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{manga.title}</h1>
              <div className="flex items-center space-x-4 text-gray-300 mb-2">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{manga.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{manga.rating}/10</span>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  manga.status === 'ongoing' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {manga.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="shadow-2xl rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">{manga.description}</p>
            </div>

            <div className="shadow-2xl rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Chapters</h2>
              <div className="space-y-2">
                {manga.chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    onClick={() => onReadChapter(chapter.id)}
                    className="flex items-center justify-between p-3 shadow-2xl rounded-lg cursor-pointer hover:bg-gray-600 transition-colors group"
                  >
                    <div>
                      <h3 className="text-white font-medium group-hover:text-red-400 transition-colors">
                        Chapter {chapter.number}: {chapter.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(chapter.releaseDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="text-red-500 hover:text-red-400 font-medium transition-colors">
                      Read →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="shadow-2xl rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">{manga.chapters.length} chapters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-gray-300">Rating: {manga.rating}/10</span>
                </div>
              </div>
            </div>

            <div className="shadow-2xl rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {manga.genres.map((genre) => (
                  <span
                    key={genre}
                    className="flex items-center space-x-1 px-3 py-2 bg-gray-700 text-gray-300 rounded-lg"
                  >
                    <Tag className="h-4 w-4" />
                    <span>{genre}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
