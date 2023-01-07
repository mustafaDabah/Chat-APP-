import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { toast } from 'react-toastify';
import personImage from '../../../../assets/images/face.jpg';
import { db } from '../../../../firebase';
import { Avatar } from '../../../../PublicComponents';
import { useStore } from '../../../../store/store';
import { User as UserType, UserChatTypes } from '../../../../utils/Types/registerTypes';

interface UserProps {
  image: string;
  name: string;
  uid: string;
  lastMessage: string;
  time?:Date
}

function User({ image, name, lastMessage, time, uid }:UserProps) {
  const { currentUser, setUserChat, setChatId } = useStore();
  console.log(lastMessage);

  const combinedId = currentUser.uid > uid ? currentUser.uid + uid : uid + currentUser.uid;

  const handleSelect = async () => {
    // check whether the group(chats in firestore) exists, if not create
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid,
            displayName: name,
            photoURL: image,
          },
          [`${combinedId}.data`]: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      }

      setChatId(combinedId);
      const userInfo:UserChatTypes = {
        displayName: name,
        photoURL: image,
        lastMessage,
        uid,
      };
      setUserChat(userInfo);
    } catch (error) {
      toast.error((error as Error).message);
    }

    // create a chat in chats collection
  };

  return (
    <div className="flex items-center justify-between border-b-[2px] border-third py-3">
      <button type="button" className="flex justify-start items-center outline-none" onClick={handleSelect}>
        <Avatar imageSrc={image} name={name} />
        <div className="ml-5 text-left">
          <h3 className="text-white text-xl">{name}</h3>
          <p className="text-gray-400 italic truncate  w-40">{lastMessage}</p>
        </div>
      </button>
      <p className="text-gray-200">{time}</p>
    </div>
  );
}

User.defaultProps = {
  time: '9:30pm',
};

export default User;

