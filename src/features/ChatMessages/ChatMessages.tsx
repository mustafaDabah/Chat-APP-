import { MessagesList, Navbar, SendMessage } from './Components';
import { useStore } from '../../store/store';
import ImgIllustrator from '../../assets/images/message.svg';
import { useMobileScreen } from '../../store/mobileScreen';

function ChatMessages() {
  const selectUserChat = useStore((state) => state.selectUserChat);
  const isSelectUser = useMobileScreen((state) => state.isSelectUser);

  // hidden z-20 absolute
  return (
    <div className={`bg-forth bg-slate-600 w-full min-h-screen lg:block ${!isSelectUser ? 'hidden' : 'block'} animate-fadeInRight`}>
      <Navbar />
      {
        Object.keys(selectUserChat).length > 1 ? (
          <div className="relative">
            <MessagesList />
            <SendMessage />
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col pt-10">
            <img src={ImgIllustrator} className="w-1/2" alt="" />
            <h3 className="text-primary text-center capitalize text-xl font-semibold py-6">please select user to start chat</h3>
          </div>
        )
      }
    </div>
  );
}

export default ChatMessages;
