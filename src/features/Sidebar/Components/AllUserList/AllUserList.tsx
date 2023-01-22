import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { User, UserChatTypes } from '../../../../utils/Types/registerTypes';
import { UserMemo } from '../User/User';

interface SliderTwoProps {
  users:User[]
}

function AllUserList({ users }: SliderTwoProps) {
  return (
    <div className="bg-third py-3">
      <div className="container">
        <h3 className="text-gray-200 text-md mb-2 pb-3 uppercase font-semibold">All users </h3>
        <div>
          {users.map((user) => (<UserMemo key={user.uid} user={user as UserChatTypes} />))}
        </div>
      </div>
    </div>
  );
}

export default AllUserList;
export const AllUserListMemo = React.memo(AllUserList);
