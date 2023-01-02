import React from 'react';
// import { useStore } from 'zustand';
import { auth } from '../../../firebase';
import { Alert } from '../../../PublicComponents';
import { useStore } from '../../../store/store';
import useSignInWithEmailAndPassword from '../Hook/useSignInWithEmailAndPassword';
import useSignUpWithGoogle from '../Hook/useSignUpWithGoogle';

function SignIn() {
  const { handleSignInWithEmailAndPassword } = useSignInWithEmailAndPassword(auth);
  const { signUpWithGoogle: signInWithGoogle } = useSignUpWithGoogle(auth);
  // const getVotes = useStore((state) => state.votes);
  // const addVotes = useStore((state) => state.addVotes);

  return (
    <form className="flex justify-center items-center flex-col" onSubmit={handleSignInWithEmailAndPassword}>
      <Alert />
      <h3>sign In</h3>
      <input type="email" name="email" placeholder="email" className="p-3 mb-3" />
      <input type="password" name="password" placeholder="password" className="p-3 mb-3" />
      <button className="" type="submit">sign In</button>
      <button className="" type="button" onClick={signInWithGoogle}>sign In with google auth</button>
    </form>
  );
}

export default SignIn;
