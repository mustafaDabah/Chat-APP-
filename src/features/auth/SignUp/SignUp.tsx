import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { Alert } from '../../../PublicComponents';
import useSignUpWithEmailAndPassword from '../Hook/useSignUpWithEmailAndPassword';
import SignUpImage from '../../../assets/images/sign-up.svg';

function SignUp() {
  const { signUpWithEmailAndPassword, user } = useSignUpWithEmailAndPassword(auth);
  console.log(user);

  return (
    <div className="container">
      <div className="flex justify-center items-center min-h-screen w-full">
        <div>
          <img src={SignUpImage} className="w-[80%] hidden lg:block" alt="" />
        </div>
        <form
          className="flex items-center flex-col w-[500px]"
          onSubmit={signUpWithEmailAndPassword}
        >
          <h3 className="text-4xl mb-5 text-secondary text-left w-full">Create Account :) </h3>
          <p className="capitalize text-gray-600 mb-5">Real Time Chat app developed my mustafa dabah using React Firebase.</p>
          <h4 className="text-lg  mb-5 text-left w-full">Sign up</h4>
          <Alert />
          <input
            type="text"
            name="username"
            placeholder="user name"
            required
            className="p-3 mb-3 border-spacing-1 border-2 border-solid rounded-md w-full border-gray-400 placeholder-shown:capitalize"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="email"
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
            className="bg-primary w-full rounded-md text-center p-3 text-white mt-3"
            type="submit"
          >sign up
          </button>
          <Link to="/login" className="bg-primary w-full rounded-md text-center p-3 text-white mt-3">sign in</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

