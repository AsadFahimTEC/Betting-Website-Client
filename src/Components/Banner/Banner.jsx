import { useState, useEffect } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/scrollbar";

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
        {/* Left site */}
        <div className=" fixed z-50 group w-[50px] h-screen bg-[#567ae2] overflow-hidden transition-all duration-300 hover:w-[200px]">
          <div className=" text-white ml-2">
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
        </div>

        {/* middle site */}
        <div className="relative flex-1 ml-16 w-[400px]">
          <img
            src={images[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="w-[788px] h-[400px]"
          />
          <button
            onClick={goToPrevImage}
            className="absolute top-1/3 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
          >
            Prev
          </button>
          <button
            onClick={goToNextImage}
            className="absolute top-1/3 right-[380px] transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
          >
            Next
          </button>
          <div>
            <div className=" mr-[365px]  mt-3">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
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
        </div>

        {/* right site */}
        <div className=" w-[350px] ml-4 rounded-sm overflow-y-auto h-[440px] fixed right-0 z-50 mb-44">
          <div>
            <div className="bg-[#e9eef2] p-4 pb-12 py-6">
              <h2 className="text-lg font-bold mb-4 text-center">
                REGISTRATION
              </h2>
              <div>
                <button className="py-2 px-11 bg-[#276aa5] text-white rounded-l">
                  One-click
                </button>
                <button className="py-2 px-10 bg-[#d4dee8] text-[#276aa5] hover:text-white hover:bg-[#276aa5] rounded-r">
                  By Phone
                </button>
              </div>

              <div className=" mt-4 bg-white px-4 p-2 rounded">
                <h2>Bangladesh</h2>
              </div>
              <div className=" mt-4 bg-white px-4 p-2 rounded">
                <h2>Bangladesh taka (BDT)</h2>
              </div>

              <div className=" mt-4">
                <input
                  className="p-2 w-full rounded"
                  placeholder="Promo code (if you have one)"
                  type="text"
                />
              </div>

              <div className=" text-center mt-4 ">
                <button className="py-2 px-28 bg-[#7eac2f] rounded text-white hover:bg-[#7eac7f]">
                  REGISTER
                </button>
              </div>
            </div>

            <div className=" text-center">
              <button className=" py-2 w-full bg-[#276aa5] text-white rounded-b">
                100% BONUS ON YOUR 1ST DEPOSIT
              </button>
            </div>
          </div>

          {/* 2nd part */}
          <div className=" mt-5">
            <div className="bg-[#e9eef2] p-4 pb-12 py-6">
              <h2 className="text-lg font-bold mb-4 text-center">
                REGISTRATION
              </h2>
              <div>
                <button className="py-2 px-11 bg-[#276aa5] text-white rounded-l">
                  One-click
                </button>
                <button className="py-2 px-10 bg-[#d4dee8] text-[#276aa5] hover:text-white hover:bg-[#276aa5] rounded-r">
                  By Phone
                </button>
              </div>

              <div className=" mt-4 bg-white px-4 p-2 rounded">
                <h2>Bangladesh</h2>
              </div>
              <div className=" mt-4 bg-white px-4 p-2 rounded">
                <h2>Bangladesh taka (BDT)</h2>
              </div>

              <div className=" mt-4">
                <input
                  className="p-2 w-full rounded"
                  placeholder="Promo code (if you have one)"
                  type="text"
                />
              </div>

              <div className=" text-center mt-4 ">
                <button className="py-2 px-28 bg-[#7eac2f] rounded text-white hover:bg-[#7eac7f]">
                  REGISTER
                </button>
              </div>
            </div>

            <div className=" text-center">
              <button className=" py-2 w-full bg-[#276aa5] text-white rounded-b">
                100% BONUS ON YOUR 1ST DEPOSIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
