import { Auth, signInWithPopup } from 'firebase/auth';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { provider } from '../../../firebase';
import { UserProps } from '../../../utils/Types/registerTypes';
import useAddUser from './useAddUser';

type SignUpWithGoogle = () => void;

const useSignUpWithGoogle = (auth: Auth): { signUpWithGoogle: SignUpWithGoogle } => {
  const { addUserToDatabase } = useAddUser();
  const navigate = useNavigate();

  const signUpWithGoogle = useCallback(async () => {
    try {
      const { user: currentUser } = await signInWithPopup(auth, provider);
      //   add user to database
      const userData:UserProps = {
        uid: currentUser.uid as string,
        displayName: currentUser.displayName as string,
        email: currentUser.email as string,
        photoURL: currentUser.photoURL as string,
      };
      addUserToDatabase(userData);
      navigate('/');
    } catch (error) {
      toast.error((error as Error).message);
    }
  }, [auth]);

  return { signUpWithGoogle };
};

export default useSignUpWithGoogle;
