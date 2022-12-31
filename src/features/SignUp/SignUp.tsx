import React, { useState, FormEvent } from 'react';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, provider } from '../../firebase';
import { Alert } from '../../PublicComponents';

interface UserInputsDataType {
    username: string;
    password: string;
    email: string;
}

function SignUp() {
  const signUpWithEmailAndPassword = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputsData = new FormData(e.target);

    const formValues = Object.fromEntries(inputsData.entries());

    const userInputsData: UserInputsDataType = {
      username: formValues.username as string,
      password: formValues.password as string,
      email: formValues.email as string,
    };

    const { username, password, email } = userInputsData;

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      await updateProfile(user, {
        displayName: username,
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/chat-app-3ddc7.appspot.com/o/avatar.svg?alt=media&token=f22c3cb8-ad9e-4d2c-8798-b135266a7371',
      });
      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastMessage: null,
      });

      console.log(user);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const signUpWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const { user } = result;

        console.log(result);
        // ...
      });
  };

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
