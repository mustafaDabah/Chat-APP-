import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../../firebase';
import { User } from '../../../utils/Types/registerTypes';

function useAddUser() {
  const addUserToDatabase = async (user:User) => {
    try {
      // @ts-ignore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastMessage: null,
      });
      // @ts-ignore
      await setDoc(doc(db, 'userChats', user.uid), {});
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return { addUserToDatabase };
}

export default useAddUser;

