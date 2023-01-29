import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from '../../../Hook/useLocalStorage';
import { UserInputsDataType } from '../../../utils/Types/registerTypes';

const useSignInWithEmailAndPassword = (auth: Auth) => {
  const navigate = useNavigate();
  const { setValue } = useLocalStorage('currentUser', {});

  const handleSignInWithEmailAndPassword = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputsData = new FormData(e.currentTarget);

    const formValues = Object.fromEntries(inputsData.entries());

    const userInputsData: UserInputsDataType = {
      password: formValues.password as string,
      email: formValues.email as string,
    };

    const { password, email } = userInputsData;

    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
          const { user } = userCredential;
          setValue(user);
          console.log(user);
        // ...
        });
      navigate('/');
    } catch (err) {
      toast.error((err as Error).message);
    }
  }, [auth]);

  return { handleSignInWithEmailAndPassword };
};

export default useSignInWithEmailAndPassword;
