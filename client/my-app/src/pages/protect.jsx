import React, { useState, useMemo } from 'react';
import { MangaCard } from '../components/MangaCard';
import { MangaDetail } from '../components/MangaDetail';
import { MangaReader } from '../components/MangaReader';
import { FilterBar } from '../components/FilterBar';
import Header from '../components/Header';
import { mangaData } from '../data/mangaData';

const Protect = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedManga, setSelectedManga] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const allGenres = useMemo(() => {
    const genres = new Set();
    mangaData.forEach((manga) => {
      manga.genres.forEach((genre) => genres.add(genre));
    });
    return Array.from(genres);
  }, []);

  const filteredManga = useMemo(() => {
    let filtered = mangaData.filter((manga) => {
      const matchesSearch =
        manga.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manga.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manga.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGenres =
        selectedGenres.length === 0 ||
        selectedGenres.some((genre) => manga.genres.includes(genre));

      return matchesSearch && matchesGenres;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'popularity':
        default:
          return b.popularity - a.popularity;
      }
    });

    return filtered;
  }, [searchQuery, selectedGenres, sortBy]);

  const handleMangaClick = (manga) => {
    setSelectedManga(manga);
    setCurrentView('detail');
  };

  const handleReadChapter = (chapterId) => {
    if (!selectedManga) return;
    const chapter = selectedManga.chapters.find((ch) => ch.id === chapterId);
    if (chapter) {
      setSelectedChapter(chapter);
      setCurrentView('reader');
    }
  };

  const handleNextChapter = () => {
    if (!selectedManga || !selectedChapter) return;
    const currentIndex = selectedManga.chapters.findIndex((ch) => ch.id === selectedChapter.id);
    if (currentIndex < selectedManga.chapters.length - 1) {
      setSelectedChapter(selectedManga.chapters[currentIndex + 1]);
    }
  };

  const handlePrevChapter = () => {
    if (!selectedManga || !selectedChapter) return;
    const currentIndex = selectedManga.chapters.findIndex((ch) => ch.id === selectedChapter.id);
    if (currentIndex > 0) {
      setSelectedChapter(selectedManga.chapters[currentIndex - 1]);
    }
  };

  const hasNextChapter = () => {
    if (!selectedManga || !selectedChapter) return false;
    const currentIndex = selectedManga.chapters.findIndex((ch) => ch.id === selectedChapter.id);
    return currentIndex < selectedManga.chapters.length - 1;
  };

  const hasPrevChapter = () => {
    if (!selectedManga || !selectedChapter) return false;
    const currentIndex = selectedManga.chapters.findIndex((ch) => ch.id === selectedChapter.id);
    return currentIndex > 0;
  };

  const handleGenreToggle = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedManga(null);
    setSelectedChapter(null);
  };

  const handleBackToDetail = () => {
    setCurrentView('detail');
    setSelectedChapter(null);
  };

  if (currentView === 'reader' && selectedManga && selectedChapter) {
    return (
      <MangaReader
        manga={selectedManga}
        chapter={selectedChapter}
        onBack={handleBackToDetail}
        onNextChapter={handleNextChapter}
        onPrevChapter={handlePrevChapter}
        hasNextChapter={hasNextChapter()}
        hasPrevChapter={hasPrevChapter()}
      />
    );
  }

  if (currentView === 'detail' && selectedManga) {
    return (
      <MangaDetail manga={selectedManga} onBack={handleBackToHome} onReadChapter={handleReadChapter} />
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#202123', marginTop: '10px' }}
    >
      <Header
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
        onMenuToggle={() => setShowMobileMenu(!showMobileMenu)}
      />

      <FilterBar
        genres={allGenres}
        selectedGenres={selectedGenres}
        onGenreToggle={handleGenreToggle}
        sortBy={sortBy}
        onSortChange={setSortBy}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredManga.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No manga found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenres([]);
              }}
              className="mt-4 text-red-500 hover:text-red-400 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredManga.map((manga) => (
              <MangaCard key={manga.id} manga={manga} onClick={() => handleMangaClick(manga)} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Protect;