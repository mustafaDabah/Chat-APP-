import { useCallback, FormEvent, useState } from 'react';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from '../../../Hooks/useLocalStorage';
import { UserInputsDataType } from '../../../utils/Types/types';
import { useMobileScreen } from '../../../store/mobileScreen';

const useSignInWithEmailAndPassword = (auth: Auth) => {
  const navigate = useNavigate();
  const { setValue } = useLocalStorage('currentUser', {});
  const [loading, setLoading] = useState(false);
  const resetIsSelectUser = useMobileScreen((state) => state.resetIsSelectUser);

  const handleSignInWithEmailAndPassword = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputsData = new FormData(e.currentTarget);

    const formValues = Object.fromEntries(inputsData.entries());

    const userInputsData: UserInputsDataType = {
      password: formValues.password as string,
      email: formValues.email as string,
    };

    const { password, email } = userInputsData;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
          const { user } = userCredential;
          setValue(user);
          // ...
        });
      navigate('/');
      setLoading(false);
      resetIsSelectUser();
    } catch (err) {
      toast.error((err as Error).message);
      setLoading(false);
    }
  }, [auth]);

  return { handleSignInWithEmailAndPassword, loading };
};

export default useSignInWithEmailAndPassword;
