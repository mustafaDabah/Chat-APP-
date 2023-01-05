import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import personImage from '../../../../assets/images/face.jpg';
import { db } from '../../../../firebase';
import { Avatar } from '../../../../PublicComponents';
import { useStore } from '../../../../store/store';

interface UserProps {
  image:string | undefined
  name: string | undefined
  lastMessage?: string | undefined
  time?:string | undefined
  uid:string
}

function User({ image, name, lastMessage, time, uid }:UserProps) {
  const { currentUser } = useStore();
  // @ts-ignore
  const combinedId = currentUser.uid > uid ? currentUser.uid + user.uid : uid + currentUser.uid;

  const handleSelect = async () => {
    // check whether the group(chats in firestore) exists, if not create
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));
    } catch (error) {
      console.log(error);
    }

    // create a chat in chats collection
  };

  return (
    <div className="flex items-center justify-between border-b-[2px] border-third py-3">
      <button type="button" className="flex justify-start items-center outline-none">
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
  lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, officia!',
};

export default User;

