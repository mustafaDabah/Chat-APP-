
import { FormEvent, useState } from 'react';
import pictureIcon from '../../../../assets/images/picture.svg';
import sendIcon from '../../../../assets/images/send.svg';
import useSendMessage from '../../hooks/useSendMessage';
import ImageSelect from '../ImageSelect/ImageSelect';

function SendMessage() {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const { handleSendMessage } = useSendMessage(img, text);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
    setText('');
    setImg(null);
  };

  const handleImg = (e: FormEvent) => {
    // @ts-ignore
    setImg((e.target as HTMLInputElement).files[0]);
  };

  const resetImage = () => setImg(null);

  return (
    <div>
      {
        img ? (<ImageSelect handleClick={resetImage} />) : null
      }
      <div className="bg-white shadow-md h-[5.5rem] mb-0 absolute bottom-0 w-full ">
        <div className="container">
          <div className="flex justify-between h-[70px] items-center">
            <form onSubmit={sendMessage} className="flex items-center flex-1">
              {/* --search input-- */}
              <label htmlFor="write" className="flex w-full  h-[30px] justify-start items-center rounded-xl  py-6 px-2">
                <input
                  type="text"
                  id="write"
                  className=" w-[100%] rounded-md outline-none text-gray-600"
                  placeholder="Write Message"
                  value={text}
                  accept="image/*"
                  onChange={(e) => setText(e.target.value)}
                />
              </label>
              <label htmlFor="image">
                <input
                  type="file"
                  id="image"
                  className="opacity-0 cursor-pointer absolute w-64  z-10 top-0 right-0 "
                  onChange={handleImg}
                />
                <img src={pictureIcon} id="image" className="w-[20px] object-cover mr-2 cursor-pointer" alt="" />
              </label>
            </form>
            <button type="button" onClick={sendMessage}>
              <img src={sendIcon} className="w-[30px]" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
