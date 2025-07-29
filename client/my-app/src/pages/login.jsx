import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Invalid Email/Password');
      }

      toast.success('Login successful!');
      localStorage.setItem('token', data.token);
      console.log("token: ", data.token)
      navigate('/protected');
    } catch (error) {
      setError('Invalid Email/Password');
      toast.error('Invalid Email/Password');
    }
  };

  return (
    <div className="mx-auto mt-15 p-10 flex items-center justify-center shadow-lg max-w-lg bg-neutral-800 rounded-3xl">
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-3 text-gray-300">Login Here!</h2>
        <p className="text-sm mt-[-10px] mb-3 text-gray-400">Welcome Back! Please sign in to continue.</p>

        <div className="mt-2 flex flex-col">
            <label className="flex mr-60 text-gray-300">Email: </label>
            <input 
                name="email"
                placeholder="Enter your email address"
                value={form.email}
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
            >Login
        </button>

        <p className="p-6">No Account? <Link className="text-blue-500" to='/register'>Register Here!</Link></p>

        {error && <p className="text-red-800 mt-4 flex justify-center items-center">{error}</p>}
    </form>
</div>
  );
};

export default Login;
