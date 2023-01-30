import React from 'react';
import { User, UserChatTypes } from '../../../../utils/Types/types';
import { UserMemo } from '../User/User';

interface SliderTwoProps {
  users:User[]
}

function AllUserList({ users }: SliderTwoProps) {
  return (
    <div className="py-2 h-fit lg:h-[300px] overflow-auto">
      <div className="container">
        <h3 className="text-gray-300 text-sm mt-2 pb-3 uppercase font-semibold">All users </h3>
        <div>
          {users.map((user) => (<UserMemo key={user.uid} user={user as UserChatTypes} />))}
        </div>
      </div>
    </div>
  );
}

export default AllUserList;
export const AllUserListMemo = React.memo(AllUserList);
