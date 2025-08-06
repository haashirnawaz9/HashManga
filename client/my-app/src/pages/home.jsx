import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
         <button className="bg-slate-800 rounded-lg p-2">
          <Link to='/manga-list'>Get Started</Link>
        </button> 
    </div>
  )
}

export default Home