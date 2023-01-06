import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import pictureIcon from '../../../../assets/images/picture.svg';
import sendIcon from '../../../../assets/images/send.svg';
import { db, storage } from '../../../../firebase';
import { useStore } from '../../../../store/store';

function SendMessage() {
  const { chatId, selectUserChat, currentUser } = useStore();
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const generateId:number = Math.floor(Math.random() * 1000);

  console.log(selectUserChat);
  const handleSend = async (e) => {
    e.preventDefault();
    if (img) {
      const storageRef = ref(storage, generateId);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // TODO:Handle Error
        },
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
    } else {
      await updateDoc(doc(db, 'chats', chatId), {
        messages: arrayUnion({
          id: generateId,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${chatId}.lastMessage`]: text,
      [`${chatId}.date`]: serverTimestamp(),
    });

    await updateDoc(doc(db, 'userChats', selectUserChat.uid), {
      [`${chatId}.lastMessage`]: text,
      [`${chatId}.date`]: serverTimestamp(),
    });

    setText('');
    setImg(null);
  };

  return (
    <div className="bg-white shadow-md h-20 mb-0 absolute bottom-0 w-full">
      <div className="container">
        <div className="flex justify-between h-[70px]">
          <form onSubmit={handleSend} className="flex items-center flex-1">
            {/* --search input-- */}
            <label htmlFor="write" className="flex w-full  h-[30px] justify-start items-center rounded-xl  py-6 px-2">
              <input
                type="text"
                id="write"
                className=" w-[100%] rounded-md outline-none text-gray-600"
                placeholder="Write Message"
                onChange={(e) => setText(e.target.value)}
              />
              <img src={pictureIcon} className="w-[20px] object-cover mr-2" alt="" />
            </label>
          </form>
          <img src={sendIcon} className="w-[30px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
