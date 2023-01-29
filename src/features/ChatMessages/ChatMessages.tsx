import { MessagesList, Navbar, SendMessage } from './Components';
import { useStore } from '../../store/store';
import ImgIllustrator from '../../assets/images/message.svg';
import background from '../../assets/images/background2.jpg';
import { useMobileScreen } from '../../store/mobileScreen';

function ChatMessages() {
  const selectUserChat = useStore((state) => state.selectUserChat);
  const isSelectUser = useMobileScreen((state) => state.isSelectUser);

  // hidden z-20 absolute
  return (
    <div className={`bg-forth w-full min-h-screen lg:block -z-0 ${!isSelectUser ? 'hidden' : 'block'} animate-fadeInRight`}>
      <Navbar />
      {
        Object.keys(selectUserChat).length > 1 ? (
          <div className="relative">
            <img src={background} alt="" className="absolute -z-10 top-0 left-0 w-full h-full opacity-[0.5] object-cover" />
            <MessagesList />
            <SendMessage />
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col min-h-screen">
            <img src={ImgIllustrator} className="w-1/2" alt="" />
            <h3 className="text-secondary text-center capitalize text-xl font-semibold py-6">please select user to start chat</h3>
          </div>
        )
      }
    </div>
  );
}

export default ChatMessages;
