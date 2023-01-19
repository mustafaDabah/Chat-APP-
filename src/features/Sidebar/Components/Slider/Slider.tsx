import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { User, UserChatTypes } from '../../../../utils/Types/registerTypes';
import { SliderItemMemo } from '../SliderItem/SliderItem';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 4,

  },
};

interface SliderTwoProps {
  users:User[]
}

function SliderTwo({ users }: SliderTwoProps) {
  const usersDisplay = users.map((user) => (<SliderItemMemo key={user.uid} user={user as UserChatTypes} />));

  return (
    <div className="bg-third py-3">
      <div className="container">
        <h3 className="text-gray-200 text-xl pb-3 capitalize font-semibold">users List </h3>
        <Carousel responsive={responsive} itemClass="carousel-width">
          {usersDisplay}
        </Carousel>
      </div>
    </div>
  );
}

export default SliderTwo;
export const SliderTwoMemo = React.memo(SliderTwo);
