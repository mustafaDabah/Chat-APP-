import React from 'react';
import { Link } from 'react-router-dom';
// import { useStore } from 'zustand';
import { auth } from '../../../firebase';
import { Alert } from '../../../PublicComponents';
import useSignInWithEmailAndPassword from '../Hook/useSignInWithEmailAndPassword';

function SignIn() {
  const { handleSignInWithEmailAndPassword } = useSignInWithEmailAndPassword(auth);

  return (
    <form className="flex justify-center items-center flex-col" onSubmit={handleSignInWithEmailAndPassword}>
      <Link to="/">home</Link>
      <Alert />
      <Link to="/sign-up">sign up</Link>
      <input type="email" name="email" placeholder="email" className="p-3 mb-3" />
      <input type="password" name="password" placeholder="password" className="p-3 mb-3" />
      <button className="" type="submit">sign In</button>
    </form>
  );
}

export default SignIn;
