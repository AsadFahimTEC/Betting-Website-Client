import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoFootballOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";

import "swiper/css";

import "swiper/css/scrollbar";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const images = [
    "https://i.ibb.co/Q82tWcK/1xbet-vignette-cricket.png",
    "https://i.ibb.co/JFjR3kx/images-2.jpg",
    "https://i.ibb.co/FK5cwcc/images-3.jpg",
    "https://i.ibb.co/px6Hkj7/images-1.jpg",
    "https://i.ibb.co/Q82tWcK/1xbet-vignette-cricket.png",
    "https://i.ibb.co/JFjR3kx/images-2.jpg",
    "https://i.ibb.co/FK5cwcc/images-3.jpg",
    "https://i.ibb.co/px6Hkj7/images-1.jpg",
    "https://i.ibb.co/9T8sF9S/images-4.jpg",
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
        <div className="fixed  z-50 group w-[45px] h-screen bg-[#567ae2] overflow-hidden transition-all duration-300 hover:w-[200px]">
          <div className=" text-white ml-2">
            <div className=" flex items-center gap-5 bg-[#276aa5] p-2 rounded">
              <span>
                <AiOutlineLike className=" text-2xl" />
              </span>
              <span>Recommended</span>
            </div>
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
        <div className="relative flex-1 ml-16 w-[350px] overflow-y-auto h-[440px]">
          <img
            src={images[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="w-[772px] h-[400px]"
          />
          <button
            onClick={goToPrevImage}
            className="absolute top-48 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
          >
            Prev
          </button>
          <button
            onClick={goToNextImage}
            className="absolute top-48 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
          >
            Next
          </button>
          <div>
            <div className="   mt-3">
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

          <div className=" mt-4">
            <div className="navbar bg-[#276aa5] rounded">
              <div className="">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Parent</a>
                      <ul className="p-2">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Item 3</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex items-center gap-2 text-white">
                  <span>
                    {" "}
                    <FaHome />
                  </span>
                  <span>
                    <FaAngleRight />
                  </span>
                  <span>
                    <IoFootballOutline />
                  </span>
                  <span>
                    <FaAngleRight />
                  </span>
                  <span>
                    <GiTrophyCup />
                  </span>
                </div>
              </div>
              <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal text-white  px-1 gap-2 font-medium w-[430px]">
                  <li>Matches</li>

                  <li>Recommended</li>
                  <li>Upcoming events</li>
                  <li>1st period</li>
                  <li>2st period</li>
                </ul>
              </div>
              <div className="navbar-end">
                <label className="input input-bordered flex items-center  gap-2">
                  <input
                    type="text"
                    className="grow w-36 "
                    placeholder="Search by match"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* right site */}
        <div className=" w-[350px] ml-4 rounded-sm overflow-y-auto h-[440px]  right-0 z-10 mb-44">
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
              <div
                tabIndex={0}
                className="collapse collapse-arrow border rounded border-base-300 bg-white mt-4"
              >
                <div
                  className="collapse-plus p-2 flex justify-between items-center"
                  onClick={toggleCollapse}
                >
                  <h2>Bangladesh</h2>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {isOpen && (
                  <div className="collapse-content">
                    <p>
                      tabIndex={0} attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                )}
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
