import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate(); 

  const token = localStorage.getItem('token')

  const Logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg p-2">
      <div className="mx-auto flex items-center justify-between p-4">
      <div className="ml-3">
        <h1><Link to ='/'> Header</Link></h1>
      </div>
      <div>
        {!token ? (
          <div className="flex gap-5 mr-5">
            <button>
              <Link to='/login'>Login</Link>
            </button>
            <button>
              <Link to='/register'>Register</Link>
            </button>
          </div>
        ) : (
          <div className="relative flex items-center justify-center mr-5" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center cursor-pointer w-8 h-8 bg-cyan-950 rounded-full"
          >
            
          </button>
    
          {open && (
            <div className="absolute w-40 mt-25 right-0 bg-gray-50 rounded-lg p-2">
              <button 
                onClick={Logout}
                className="text-red-600 mr-18 cursor-pointer text-md">Log out
              </button>
            </div>
          )}
        </div>
        )}
      </div>
    </div>
    </nav>
  )
}

export default Header
