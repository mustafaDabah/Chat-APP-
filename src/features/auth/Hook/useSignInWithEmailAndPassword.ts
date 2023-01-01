import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { UserInputsDataType } from '../../../utils/Types/registerTypes';

const useSignInWithEmailAndPassword = (auth: Auth) => {
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
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (err) {
      toast.error((err as Error).message);
    }
  }, [auth]);

  return { handleSignInWithEmailAndPassword };
};

export default useSignInWithEmailAndPassword;
