import React, { useEffect } from 'react';
import { Book, Search, Bookmark, ArrowRight, Users, Smartphone, Download, Eye, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HashManga"
  }, [])

  const handleSubmit = () => {
    navigate('/manga-list')
  }
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#202123', color: 'white' }}>
    {/* Hero Section */}
  <section className="relative overflow-hidden py-15 px-6 w-full bg-gradient-to-b from-[#1a1c1f] via-[#202123] to-[#1a1c1f] rounded-3xl mb-15 mt-[-15px]">
  {/* Blended Background Blobs */}
  <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[140px] z-0"></div>
  <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[140px] z-0"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <div className="mb-10">
      <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
        Hash<span className="text-rose-500">Manga</span>
      </h1>
      <div className="w-28 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto mb-6 rounded-full"></div>
    </div>

    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      Discover thousands of manga titles from around the world. Read your favorite series, discover new adventures, 
      and immerse yourself in captivating stories—all in one place.
    </p>

    <div className="flex justify-center items-center mb-16">
      <button
        onClick={handleSubmit}
        className="group bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 px-10 py-5 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
      >
        <Book size={24} />
        Start Reading
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
</section>


      {/* Features Grid */}
      <section className="py-20 px-6 mt-[-60px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience manga reading like never before with our comprehensive platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-rose-500/25 transition-all duration-300">
                <Search size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Smart Search</h3>
              <p className="text-gray-400 leading-relaxed">
                Find any manga instantly with our advanced search engine. Filter by genre, author, status, and more.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-rose-500/25 transition-all duration-300">
                <Bookmark size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Personal Library</h3>
              <p className="text-gray-400 leading-relaxed">
                Build your personal collection, track reading progress, and never lose your place in any series.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-rose-500/25 transition-all duration-300">
                <Smartphone size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mobile Optimized</h3>
              <p className="text-gray-400 leading-relaxed">
                Perfect reading experience on any device. Responsive design that adapts to your screen size.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-rose-500/25 transition-all duration-300">
                <Download size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Offline Reading</h3>
              <p className="text-gray-400 leading-relaxed">
                Download chapters for offline reading. Never let poor internet stop your manga marathon.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-rose-500/25 transition-all duration-300">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Join discussions, share reviews, and connect with fellow manga enthusiasts from around the world.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-rose-500/25 transition-all duration-300">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Reading Modes</h3>
              <p className="text-gray-400 leading-relaxed">
                Multiple reading modes including page-by-page, long strip, and customizable viewer settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Manga Section */}
      <section className="py-20 px-6 mt-[-20px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              Popular Manga
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dive into the most beloved manga series that have captured millions of hearts worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* One Piece */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-3xl overflow-hidden hover:border-rose-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10">
                <div className="relative h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <img src='https://ik.imagekit.io/puwfr20gk/Screenshot%202025-08-06%20at%209.36.19%E2%80%AFPM.png?updatedAt=1754530599276' alt='' className="h-full w-full object-cover"/>
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    #1 Popular
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">One Piece</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Follow Monkey D. Luffy's epic adventure to become the Pirate King in this legendary tale of friendship, dreams, and the Grand Line.
                  </p>
                </div>
              </div>
            </div>

            {/* Naruto */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-3xl overflow-hidden hover:border-rose-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10">
                <div className="relative h-80 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 flex items-center justify-center">
                  <img src='https://ik.imagekit.io/puwfr20gk/Screenshot%202025-08-06%20at%209.41.50%E2%80%AFPM.png?updatedAt=1754530921761' alt='' className="object-cover h-full w-full" />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Classic
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">Naruto</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Join Naruto Uzumaki on his journey from outcast to hero as he pursues his dream of becoming Hokage in this ninja masterpiece.
                  </p>
                </div>
              </div>
            </div>

            {/* Attack on Titan */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-rose-500/20 rounded-3xl overflow-hidden hover:border-rose-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10">
                <div className="relative h-80 bg-gradient-to-br from-red-600/20 to-gray-700/20 flex items-center justify-center">
                  <img src='https://ik.imagekit.io/puwfr20gk/Screenshot%202025-08-06%20at%209.43.50%E2%80%AFPM.png?updatedAt=1754531045075' alt='' className="object-cover h-full w-full"/>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Completed
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">Attack on Titan</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Experience humanity's desperate fight for survival against the Titans in this dark, thrilling saga that redefined manga storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-rose-500/10 to-pink-600/10 border border-rose-500/20 rounded-3xl p-12 text-center">
            <div className="mb-8">
              <Sparkles size={48} className="text-rose-400 mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Dive Into Your Next Adventure?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join millions of readers who trust HashManga for their daily dose of amazing stories. 
                Start your journey today and discover why we're the #1 manga reading platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button onClick={handleSubmit} className="group bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 px-10 py-5 rounded-full text-white font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
                <Book size={28} />
                Explore Library
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;