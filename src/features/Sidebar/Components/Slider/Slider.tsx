import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import photoOne from '../../../../assets/images/face.jpg';

function SliderTwo() {
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
  return (
    <div className="bg-third py-3">
      <div className="container">
        <h3 className="text-gray-200 text-xl pb-3 capitalize">users List </h3>
        <Carousel responsive={responsive} itemClass="carousel-width">
          <button type="button">
            <img src={photoOne} className="w-[50px] rounded-full" />
          </button>
          <button type="button">
            <img src={photoOne} className="w-[50px] rounded-full" />
          </button>
          <button type="button">
            <img src={photoOne} className="w-[50px] rounded-full" />
          </button>
          <button type="button">
            <img src={photoOne} className="w-[50px] rounded-full" />
          </button>
          <button type="button">
            <img src={photoOne} className="w-[50px] rounded-full" />
          </button>
          <button type="button">
            <img src={photoOne} className="w-[50px] rounded-full" />
          </button>
          <button type="button">
            <img src={photoOne} className="w-[50px] rounded-full" />
          </button>
          <button type="button">
            <img src={photoOne} className="w-[50px] rounded-full" />
          </button>

        </Carousel>
      </div>
    </div>
  );
}

export default SliderTwo;
