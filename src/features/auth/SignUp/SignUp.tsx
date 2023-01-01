import React, { useState, FormEvent } from 'react';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, provider } from '../../../firebase';
import { Alert } from '../../../PublicComponents';
import { UserInputsDataType } from '../../../utils/Types/registerTypes';
import useSignUpWithEmailAndPassword from '../Hook/useSignUpWithEmailAndPassword';
import useSignUpWithGoogle from '../Hook/useSignUpWithGoogle';

function SignUp() {
  const { signUpWithEmailAndPassword, user } = useSignUpWithEmailAndPassword(auth);
  const { signUpWithGoogle } = useSignUpWithGoogle(auth);
  console.log(user);

  return (
    <form className="flex justify-center items-center flex-col" onSubmit={signUpWithEmailAndPassword}>
      <Alert />
      <h3>sign up</h3>
      <input type="text" name="username" placeholder="user name" className="p-3 mb-3" />
      <input type="email" name="email" placeholder="email" className="p-3 mb-3" />
      <input type="password" name="password" placeholder="password" className="p-3 mb-3" />
      <button className="" type="submit">sign up</button>
      <button className="" type="button" onClick={signUpWithGoogle}>sign up</button>
    </form>
  );
}

export default SignUp;
