import { useState } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const inter = Inter({ subsets: ['latin'] });

function isValidEmail(value) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setIsEmailValid(false);
      setErrorMessage('Invalid email address');
    } else if (password.trim() === '') {
      setIsPasswordValid(false);
      setErrorMessage('Password is required');
    } else {
      // Perform authentication
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset form fields and validation
      setEmail('');
      setPassword('');
      setIsEmailValid(true);
      setIsPasswordValid(true);
      setErrorMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-2/5 flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl justify-center shadow-2xl flex w-4/5 max-w-2xl">
          <div className="w-4/5">
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-400 mb-2">Sign in to your Account</h2>
              <div className="border-2 w-10 border-blue-400 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`bg-gray-100 outline-none text-sm flex-1 ${
                      isEmailValid ? '' : 'border-red-500'
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValid(true); // Reset the validity on input change
                      setErrorMessage('');
                    }}
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`bg-gray-100 outline-none text-sm flex-1 ${
                      isPasswordValid ? '' : 'border-red-500'
                    }`}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setIsPasswordValid(true); // Reset the validity on input change
                      setErrorMessage('');
                    }}
                  />
                </div>

                {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password?
                  </a>
                </div>

                <button
                  className="border-2 border-blue-400 text-blue-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white"
                  onClick={handleSignIn}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
}
