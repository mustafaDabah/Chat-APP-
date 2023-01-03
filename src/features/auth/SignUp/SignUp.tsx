import React from 'react';
import { auth } from '../../../firebase';
import { Alert } from '../../../PublicComponents';
import useSignUpWithEmailAndPassword from '../Hook/useSignUpWithEmailAndPassword';

function SignUp() {
  const { signUpWithEmailAndPassword, user } = useSignUpWithEmailAndPassword(auth);
  console.log(user);

  return (
    <form className="flex justify-center items-center flex-col" onSubmit={signUpWithEmailAndPassword}>
      <Alert />
      <h3>sign up</h3>
      <input type="text" name="username" placeholder="user name" className="p-3 mb-3" />
      <input type="email" name="email" placeholder="email" className="p-3 mb-3" />
      <input type="password" name="password" placeholder="password" className="p-3 mb-3" />
      <button className="" type="submit">sign up</button>
    </form>
  );
}

export default SignUp;
