import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import Home from './pages/home'
import Login from './pages/login'
import { ToastContainer } from 'react-toastify'
import Protect from './pages/protect'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />}/>
        <Route path='/manga-list' element={
        <ProtectedRoute>
          <Protect />
        </ProtectedRoute>
      }/>
      </Routes>

      <ToastContainer autoClose={1200} position='top-center'/>
    </BrowserRouter>
  )
}

export default App
