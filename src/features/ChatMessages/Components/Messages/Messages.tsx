import React from 'react';

function Messages({ text, timestamp, sender, avatarUrl }) {
  const isCurrentUser = sender === 'current-user';

  return (
    <div className={`flex items-center pt-3 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {/* {!isCurrentUser && <img src={avatarUrl} alt={sender} className="w-12 h-12 rounded-full flex-shrink-0 mx-6" />} */}
      <div className={`px-6 py-4 rounded-lg shadow-md relative mx-8 ${isCurrentUser ? 'bg-secondary text-white' : 'bg-white'}`}>
        {/* --shape-- */}
        <div className={`w-10  overflow-hidden inline-block absolute top-2 ${isCurrentUser ? '-right-[28px] transform origin-top-left' : '-left-[28px]'}`}>
          <div className={`h-11 transform  ${isCurrentUser ? 'bg-secondary transform origin-top-left rotate-45' : 'bg-white origin-top-right -rotate-45'}`} />
        </div>
        {/* --message text-- */}
        <p className={`${isCurrentUser ? 'text-gray-300' : 'text-gray-700'}`}>{text}</p>
        <p className={`text-gray-400 italic text-sm ${isCurrentUser ? 'text-right' : 'text-left'}`}>{timestamp}</p>
      </div>
      {/* {isCurrentUser && <img src={avatarUrl} alt={sender} className="w-12 h-12 rounded-full flex-shrink-0 mx-6" />} */}
    </div>
  );
}

export default Messages;
