import { Auth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { defaultAvatar } from '../../../utils/DefaultAvatar';
import { UserInputsDataType, UserProps } from '../../../utils/Types/registerTypes';
import useAddUser from './useAddUser';

const useSignUpWithEmailAndPassword = (auth: Auth) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { addUserToDatabase } = useAddUser();

  const signUpWithEmailAndPassword = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputsData = new FormData(e.currentTarget);

    const formValues = Object.fromEntries(inputsData.entries());

    const userInputsData: UserInputsDataType = {
      username: formValues.username as string,
      password: formValues.password as string,
      email: formValues.email as string,
    };

    const { username, password, email } = userInputsData;

    try {
      const { user: currentUser } = await createUserWithEmailAndPassword(auth, email, password);
      setUser(currentUser);
      // update user name and avatar photo
      await updateProfile(currentUser, {
        displayName: username,
        photoURL: defaultAvatar,
      });
      navigate('/');
      //   add user to database
      const userData:UserProps = {
        uid: currentUser.uid as string,
        displayName: currentUser.displayName as string,
        email: currentUser.email as string,
        photoURL: currentUser.photoURL as string,
      };
      addUserToDatabase(userData);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return { signUpWithEmailAndPassword, user };
};

export default useSignUpWithEmailAndPassword;
