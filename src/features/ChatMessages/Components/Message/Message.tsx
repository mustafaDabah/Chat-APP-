import { useStore } from '../../../../store/store';
import { getTime } from '../../../../utils/getTime';
import { MessageType } from '../../../../utils/Types/registerTypes';
import useScroll from '../../hooks/useScroll';
import imgEx from '../../../../assets/images/face.jpg';
// text, timestamp, sender, avatarUrl

function Message({ message }:MessageType) {
  const { currentUser, selectUserChat } = useStore();
  const isCurrentUser = message.senderId === currentUser.uid;
  const ref = useScroll(message);

  console.log(message.img);

  return (
    <div ref={ref} className={`flex items-center pt-3 z-20 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {!isCurrentUser && <img src={selectUserChat.photoURL} alt="" className="w-12 h-12 rounded-full flex-shrink-0 mx-6 object-cover" />}
      <div className={`px-6 py-4 rounded-lg shadow-md relative  ${isCurrentUser ? 'bg-secondary text-white' : 'bg-white'}`}>
        {/* --shape-- */}
        <div className={`w-10  overflow-hidden inline-block absolute top-2 ${isCurrentUser ? '-right-[28px] transform origin-top-left' : '-left-[28px]'}`}>
          <div className={`h-11 transform  ${isCurrentUser ? 'bg-secondary transform origin-top-left rotate-45' : 'bg-white origin-top-right -rotate-45'}`} />
        </div>
        {/* --message text-- */}
        <p className={`${isCurrentUser ? 'text-gray-300' : 'text-gray-700'}`}>{message.text}</p>
        {message.img ? (<img src={message.img} alt="" className="w-[200px] h-[200px] object-cover" />) : null}
        <p className={`text-gray-400 italic text-sm ${isCurrentUser ? 'text-right' : 'text-left'}`}>{getTime(message.date)}</p>
      </div>
      {isCurrentUser && <img src={currentUser.photoURL || ''} alt="" className="w-12 h-12 rounded-full flex-shrink-0 mx-6 object-cover" />}
    </div>
  );
}

export default Message;
