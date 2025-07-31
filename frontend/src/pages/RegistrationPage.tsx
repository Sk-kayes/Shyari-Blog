import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-[#fbe0c3]">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#C0392B] mb-2">
            Naya Account Banayein
          </h2>
          <p className="text-lg text-[#2C3E50]">
            Apni dil ki baatein likhne ke liye register karein.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#C0392B] focus:border-[#C0392B] focus:z-10 sm:text-sm"
              placeholder="Username"
              value={formData.username}
              onChange={onChangeHandler}
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#C0392B] focus:border-[#C0392B] focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={formData.email}
              onChange={onChangeHandler}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#C0392B] focus:border-[#C0392B] focus:z-10 sm:text-sm"
              placeholder="Password"
              value={formData.password}
              onChange={onChangeHandler}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#C0392B] hover:bg-[#a93226] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C0392B] transition"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#2C3E50]">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[#C0392B] hover:text-[#a93226] underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
