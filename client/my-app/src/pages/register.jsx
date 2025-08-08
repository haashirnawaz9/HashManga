import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/manga-list')
    }
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://hashmangaserver.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if(response.ok) {
        const data = await response.json()
        console.log(data)
        toast.success('Registration successful!');
        navigate('/login');
      } else {
        setError('Email already taken.');
        toast.error('Email already taken.');
      }
    } catch (error) {
      setError('Something went wrong.');
      toast.error('Something went wrong.');
    }
  };

  return (
    <div className="mx-auto mt-8 p-10 flex items-center justify-center shadow-lg max-w-lg bg-neutral-800 rounded-3xl">
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-3 text-gray-300">Register Here!</h2>
        <p className="text-sm mt-[-10px] mb-3 text-gray-400">Welcome! Create an account to continue.</p>

        <div className="mt-2 flex flex-col">
            <label className="flex mr-60 text-gray-300">Name: </label>
            <input 
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-blue-50 text-black rounded-md p-2 mt-2">
            </input>
        </div>

        <div className="mt-2 flex flex-col">
            <label className="flex mr-60 text-gray-300">Email: </label>
            <input 
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                type="email"
                onChange={handleChange}
                required
                className="bg-blue-50 text-black rounded-md p-2 mt-2">
            </input>
        </div>

        <div className="mt-4 flex flex-col">
            <label className="mr-52 text-gray-300">Password: </label>
            <input 
                name="password"
                placeholder="Enter your password"
                value={form.password}
                type="password"
                onChange={handleChange}
                required
                className="bg-blue-50 text-black p-2 rounded-md mt-2">
            </input>
        </div>

        <button 
            type="submit"
            className="mt-6 bg-slate-600 text-white p-2 rounded-md w-24 cursor-pointer"
            >Register
        </button>

        <p className="p-6">Have an account? <Link className="text-red-500" to='/login'>Login Here!</Link></p>

        {error && <p className="text-red-800 mb-2 flex justify-center items-center">{error}</p>}
        <p className="text-gray-500 mt-[-7px]">HashManga</p>
    </form>
</div>
  );
};

export default Register;
