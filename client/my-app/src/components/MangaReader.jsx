import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Home, RotateCcw } from 'lucide-react';

export const MangaReader = ({
  manga,
  chapter,
  onBack,
  onNextChapter,
  onPrevChapter,
  hasNextChapter,
  hasPrevChapter
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const nextPage = () => {
    if (currentPage < chapter.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (hasNextChapter) {
      onNextChapter();
      setCurrentPage(0);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (hasPrevChapter) {
      onPrevChapter();
    }
  };

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const centerX = rect.width / 2;

    if (clickX > centerX) {
      nextPage();
    } else {
      prevPage();
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Back to Manga</span>
          </button>

          <div className="text-center">
            <h1 className="text-white font-bold text-lg">{manga.title}</h1>
            <p className="text-gray-300 text-sm">
              Chapter {chapter.number}: {chapter.title}
            </p>
          </div>

          <button
            onClick={() => setShowControls(!showControls)}
            className="text-white hover:text-red-400 transition-colors"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen pt-16 pb-20">
        <div className="relative max-w-4xl mx-auto">
          <img
            src={chapter.pages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className="max-w-full max-h-[80vh] object-contain cursor-pointer"
            onClick={handleImageClick}
          />

          {/* Navigation arrows */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0 && !hasPrevChapter}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full transition-all duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            } ${currentPage === 0 && !hasPrevChapter ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/70'}`}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === chapter.pages.length - 1 && !hasNextChapter}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full transition-all duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            } ${currentPage === chapter.pages.length - 1 && !hasNextChapter ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/70'}`}
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="p-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-white text-sm mb-2">
              <span>Page {currentPage + 1} of {chapter.pages.length}</span>
              <span>{Math.round(((currentPage + 1) / chapter.pages.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentPage + 1) / chapter.pages.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Chapter Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={onPrevChapter}
              disabled={!hasPrevChapter}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                hasPrevChapter 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Previous Chapter</span>
            </button>

            <button
              onClick={() => setCurrentPage(0)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">First Page</span>
            </button>

            <button
              onClick={onNextChapter}
              disabled={!hasNextChapter}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                hasNextChapter 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span className="hidden sm:inline">Next Chapter</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
