import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import { useCurrentUser } from '../../../store/currentUser';
import { useStore } from '../../../store/store';

function useSendMessage(img:File | null, text:string) {
  const { currentUser } = useCurrentUser();
  const { chatId, selectUserChat } = useStore();

  const generateId:string | number = `${Math.floor(Math.random() * 1000)}md`;

  const handleSendMessage = async () => {
    if (img) {
      const storageRef = ref(storage, generateId);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        'state_changed',
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', chatId), {
              messages: arrayUnion({
                id: generateId,
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        },
      );
    } else if (text.length > 0) {
      await updateDoc(doc(db, 'chats', chatId), {
        messages: arrayUnion({
          id: generateId,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });

      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [`${chatId}.lastMessage`]: text,
        [`${chatId}.date`]: serverTimestamp(),
      });

      await updateDoc(doc(db, 'userChats', selectUserChat.uid), {
        [`${chatId}.lastMessage`]: text,
        [`${chatId}.date`]: serverTimestamp(),
      });
    }
  };

  return { handleSendMessage };
}

export default useSendMessage;
