import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../../firebase';
import { UserProps } from '../../../utils/Types/registerTypes';

function useAddUser() {
  const addUserToDatabase = async (user:UserProps) => {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastMessage: null,
      });
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return { addUserToDatabase };
}

export default useAddUser;
