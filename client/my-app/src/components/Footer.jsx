const Footer = () => {
    return (
      <footer className="mt-auto bottom-0 h-10">
        {/* Full-bleed bar that ignores parent max-width/padding */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen
                        border-t border-neutral-800 shadow-lg">
          {/* Centered content area */}
          <div className="max-w-7xl mx-auto p-6 text-center justify-center">
            <h1 className="text-neutral-400">Copyright © 2025 HashManga. All Rights reserved.</h1>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  