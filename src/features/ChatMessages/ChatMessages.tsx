import { MessagesList, Navbar, SendMessage } from './Components';
import { useStore } from '../../store/store';
import ImgIllustrator from '../../assets/images/message.svg';

function ChatMessages() {
  const selectUserChat = useStore((state) => state.selectUserChat);
  // hidden z-20 absolute
  return (
    <div className="bg-forth w-full min-h-screen ">
      <Navbar />
      {
        Object.keys(selectUserChat).length > 1 ? (
          <div className="relative ">
            <MessagesList />
            <SendMessage />
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col pt-10">
            <img src={ImgIllustrator} alt="" />
            <h3 className="text-primary text-center capitalize text-xl font-semibold py-6">please select user to start chat</h3>
          </div>
        )
      }
    </div>
  );
}

export default ChatMessages;
