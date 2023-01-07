import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { UserChatTypes } from '../../../../utils/Types/registerTypes';
import useGetUsers from '../../Hooks/useGetUsers';
import SliderItem from '../SliderItem/SliderItem';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 320 },
    items: 5,
  },
  // desktop: {
  //   breakpoint: { max: 3000, min: 1024 },
  //   items: 3,
  // },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2,
  // },
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 1,
  // },
};

function SliderTwo() {
  const { users } = useGetUsers();
  const usersDisplay = users?.map((user) => <SliderItem key={user.uid} user={user as UserChatTypes} />);

  return (
    <div className="bg-third py-3">
      <div className="container">
        <h3 className="text-gray-200 text-xl pb-3 capitalize">users List </h3>
        <Carousel responsive={responsive} itemClass="carousel-width">
          {/* {users && users?.map((user) => <SliderItem key={user.uid} user={user} />)} */}
          {usersDisplay}
        </Carousel>
      </div>
    </div>
  );
}

export default SliderTwo;
