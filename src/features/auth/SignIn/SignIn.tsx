import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { Alert } from '../../../PublicComponents';
import useSignInWithEmailAndPassword from '../Hook/useSignInWithEmailAndPassword';
import SignInImage from '../../../assets/images/sign.svg';

function SignIn() {
  const { handleSignInWithEmailAndPassword, loading } = useSignInWithEmailAndPassword(auth);

  return (
    <div className="container">
      <div className="flex justify-center items-center min-h-screen w-full">
        <div>
          <img src={SignInImage} className="w-[80%] hidden lg:block" alt="" />
        </div>
        <form
          className="flex items-center flex-col w-[500px]"
          onSubmit={handleSignInWithEmailAndPassword}
        >
          <h3 className="text-4xl mb-5 text-secondary text-left w-full">Welcome Back :) </h3>
          <p className="capitalize text-gray-600 mb-5">Real Time Chat app developed my mustafa dabah using React Firebase.</p>
          <h4 className="text-lg  mb-5 text-left w-full">Sign In</h4>
          <Alert />
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="p-3 mb-3 border-spacing-1 border-2 border-solid rounded-md w-full border-gray-400 placeholder-shown:capitalize"
          />
          <input
            type="password"
            required
            name="password"
            placeholder="password"
            className="p-3 mb-3 border-spacing-1 border-2 border-solid rounded-md w-full border-gray-400 placeholder-shown:capitalize"
          />
          <button
            className="bg-primary w-full  capitalize rounded-md text-center p-3 text-white mt-3"
            type="submit"
            disabled={loading}
          >
            {loading ? 'loading...' : 'sign in'}
          </button>
          <Link to="/sign-up" className="bg-primary capitalize w-full rounded-md text-center p-3 text-white mt-3">sign up</Link>
        </form>
      </div>
      <Link to="/">home</Link>
    </div>
  );
}

export default SignIn;
