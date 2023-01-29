import React, { useState } from 'react';
import { getAuth, updateProfile, User } from 'firebase/auth';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import personImage from '../../../../assets/images/face.jpg';
import pictureIcon from '../../../../assets/images/picture.svg';
import editIcon from '../../../../assets/images/edit.svg';
import { ButtonWithIcon, ButtonWithIconMemo } from '../../../../PublicComponents';
import { useCurrentUser } from '../../../../store/currentUser';
import { db, storage } from '../../../../firebase';
import { useStore } from '../../../../store/store';

type ImageSource = Blob | ArrayBuffer | File | Uint8Array

function ProfilePictureForm() {
  const [image, setImage] = useState<ImageSource | null>(null);
  const currentUser = useCurrentUser((state) => state.currentUser);
  const selectUser = useStore((state) => state.selectUserChat);
  const combinedId = currentUser.uid > selectUser.uid ? currentUser.uid + selectUser.uid : selectUser.uid + currentUser.uid;

  console.log(currentUser);
  console.log(image, 'check');

  const handleChange = async (event :React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setImage(event.target.files[0]);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // update user's profile picture using the image file
    const auth = getAuth();
    const date = new Date().getTime();
    const displayName: string = currentUser.displayName !== null ? currentUser.displayName : '';
    const storageRef = ref(storage, `${displayName + date}`);

    if (image) {
      console.log(image, 'check');
      // @ts-ignore
      await uploadBytesResumable(storageRef, image).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
          // Update profile
            if (auth.currentUser !== null) {
              await updateProfile(auth.currentUser, {
              // displayName,
                photoURL: downloadURL,
              });
              toast.success('Update profile successful!');
            }
            // create user on firestore
            await updateDoc(doc(db, 'users', currentUser.uid), {
              photoURL: downloadURL,
            });
            await updateDoc(doc(db, 'userChats', currentUser.uid), {
              uid: combinedId,
              userInfo: {
                photoURL: downloadURL,
              },
            });
          } catch (err) {
            console.log(err);
          }
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex justify-center items-center pt-3">
      <button type="button" className="relative w-64 h-64 rounded-full bg-[#c7c3ff] focus:outline-none focus:shadow-outline-indigo">
        <div className="absolute left-5 cursor-pointer">
          <ButtonWithIconMemo
            icon={editIcon}
            name="edit icon"
            handelClick={() => null}
          />
        </div>
        {image ? (
        // @ts-ignore
          <img src={URL.createObjectURL(image)} alt="Profile preview" className="w-full h-full rounded-full object-cover" />
        ) : (
          <img src={currentUser.photoURL || ''} className="w-full h-full rounded-full object-cover" alt="" />
        )}
        <input
          type="file"
          accept="image/*"
          className="opacity-0 cursor-pointer absolute w-64 h-64 z-10 top-0 right-0"
          onChange={handleChange}
        />
      </button>
      {image && (
        <button
          type="submit"
          className=" mb-4 mr-4 py-2 px-4 bg-indigo-600 rounded-md text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
        >
          Update
        </button>
      )}
    </form>
  );
}

export default ProfilePictureForm;
