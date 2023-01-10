import React from 'react';
import { Message, Navbar, SendMessage } from './Components';
import useMessages from './hooks/useMessages';
import { MessageType } from '../../utils/Types/registerTypes';
import messagesBG from '../../assets/images/bg.png';
import { useStore } from '../../store/store';
import ImgIllustrator from '../../assets/images/message.svg';

function ChatMessages() {
  const messages = useMessages();
  const selectUserChat = useStore((state) => state.selectUserChat);

  return (
    <div className=" w-full min-h-screen relative">
      <Navbar />
      {
        Object.keys(selectUserChat).length > 1 ? (
          <div className="h-[720px] overflow-auto">
            {messages.map((message: MessageType['message']) => (
              <Message message={message} key={message.id} />
            ))}
          </div>

        ) : (
          <div className="flex justify-center items-center flex-col py-3">
            <img src={ImgIllustrator} alt="" />
            <h3 className="text-primary text-center capitalize text-xl font-semibold py-6">please select user to start chat</h3>
          </div>
        )
      }
      <SendMessage />
    </div>
  );
}

export default ChatMessages;
