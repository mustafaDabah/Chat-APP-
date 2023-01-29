import { Auth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState, FormEvent } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from '../../../Hook/useLocalStorage';
import { defaultAvatar } from '../../../utils/DefaultAvatar';
import { UserInputsDataType, User, ImageSource } from '../../../utils/Types/registerTypes';
import useAddUser from './useAddUser';
import { storage } from '../../../firebase';

const useSignUpWithEmailAndPassword = (auth: Auth) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { addUserToDatabase } = useAddUser();
  const { setValue } = useLocalStorage('currentUser', {});

  const signUpWithEmailAndPassword = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputsData = new FormData(e.currentTarget);

    const formValues = Object.fromEntries(inputsData.entries());
    console.log(formValues);

    const userInputsData: UserInputsDataType = {
      username: formValues.username as string,
      password: formValues.password as string,
      email: formValues.email as string,
      photoURL: formValues.picture as ImageSource,
    };

    const { username, password, email, photoURL } = userInputsData;

    const date = new Date().getTime();
    const displayName: string = username || '';
    const storageRef = ref(storage, `${displayName + date}`);

    try {
      const { user: currentUser } = await createUserWithEmailAndPassword(auth, email, password);
      setValue(currentUser);
      setUser(currentUser);
      // update user name and avatar photo
      // @ts-ignore
      await uploadBytesResumable(storageRef, photoURL).then(async () => {
        const downloadURL = await getDownloadURL(storageRef);

        let isUserAddPicture = defaultAvatar;
        if (photoURL instanceof File && photoURL.size > 0) {
          isUserAddPicture = downloadURL;
        }

        await updateProfile(currentUser, {
          displayName: username,
          photoURL: isUserAddPicture,
        });
      });

      navigate('/');
      //   add user to database
      const userData:User = {
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
