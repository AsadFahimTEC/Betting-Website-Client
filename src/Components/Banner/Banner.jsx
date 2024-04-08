// import { useState, useEffect } from "react";

// const Banner = () => {
//   const images = [
//     "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
//     "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
//     "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
//     "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
//     "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
//     "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
//     "https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevImage = () => {
//     setCurrentImageIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(goToNextImage, 6000);
//     return () => clearInterval(interval);
//   }, [currentImageIndex]);

//   return (
//     <div className="flex mt-28">
//       <div className=" w-[50px] bg-yellow-100">
//         <h2>hello friend</h2>
//         <h2>hello</h2>
//         <h2>hello</h2>
//         <h2>hello</h2>
//         <h2>hello</h2>
//         <h2>hello</h2>
//         <h2>hello</h2>
//         <h2>hello</h2>
//         <h2>hello</h2>
//       </div>

//       <div className="relative flex-1">
//         <img
//           src={images[currentImageIndex]}
//           alt={`Banner ${currentImageIndex + 1}`}
//           className="w-full h-[400px]"
//         />
//         <button
//           onClick={goToPrevImage}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={goToNextImage}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
//         >
//           Next
//         </button>
//       </div>

//       <div className="overflow-y-auto w-60 ml-4">
//         <h2 className="text-lg font-bold mb-4">Sidebar</h2>
//         <div>
//           {/* Sidebar content */}
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
//             aliquet nulla. Vestibulum ante ipsum primis in faucibus orci luctus
//             et ultrices posuere cubilia curae; Integer vitae diam eget mi
//             aliquam blandit. Sed vitae sollicitudin urna. Phasellus mattis purus
//             ac justo pharetra, at aliquet nisl consectetur. Fusce sit amet
//             luctus risus.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Banner = () => {
  const images = [
    "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    "https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 6000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className=" mt-28">
      <div className="flex ">
        <div className="relative group w-[50px] bg-yellow-100 overflow-hidden transition-all duration-300 hover:w-[200px] ">
          <h2>hello friend</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
        </div>

        <div className="relative flex-1">
          <img
            src={images[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="w-full h-[400px]"
          />
          <button
            onClick={goToPrevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
          >
            Prev
          </button>
          <button
            onClick={goToNextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
          >
            Next
          </button>
        </div>

        <div className="overflow-y-auto w-60 ml-4">
          <h2 className="text-lg font-bold mb-4 text-center">REGISTRATION</h2>
          <div>
            {/* Sidebar content */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec aliquet nulla. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Integer vitae diam eget
              mi aliquam blandit. Sed vitae sollicitudin urna. Phasellus mattis
              purus ac justo pharetra, at aliquet nisl consectetur. Fusce sit
              amet luctus risus.
            </p>
          </div>
        </div>
      </div>

      <div className=" mr-[256px] ml-[50px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jyscW5p/images.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
