import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { FaArrowUp, FaArrowDown, FaStar } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import "swiper/css/navigation";
import "swiper/css";

const CommetsSlider: FC = () => {
  const prevRef = useRef<any>(0);
  const nextRef = useRef<any>(0);
  return (
    <div className="sliderComments relative mt-12">
      <button
        ref={nextRef}
        className="bg-white p-4 rounded-xl absolute -top-8 right-[250px] z-10 shadow-lg"
        onClick={() => {
          nextRef.current = nextRef.current + 1;
        }}
      >
        <FaArrowUp color="#0e33ea" />
      </button>
      <Swiper
        direction={"vertical"}
        allowTouchMove={false}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2500 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[550px] border-[0.1px] border-gray-300 rounded-lg h-[150px]  z-0">
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-x-2 text-lg font-Yek-ExtraBlack text-gray-600">
                <button className="bg-gray-200 p-3 rounded-full">
                  <LuUser2 color="#333" size={30} />
                </button>
                <h1>محمد سیف الهی</h1>
              </div>
              <div className="flex gap-x-1">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
              </div>
            </div>
            <div className="px-4 text-md font-Yek-Light text-gray-600">
              <p>
                کافیست بر روی گزینه ارسال نظر کلیک کنید وکرده و بروی دکمه ثبت
                کلیک
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[550px] border-[0.1px] border-gray-300 rounded-lg h-[150px]  z-0">
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-x-2 text-lg font-Yek-ExtraBlack text-gray-600">
                <button className="bg-gray-200 p-3 rounded-full">
                  <LuUser2 color="#333" size={30} />
                </button>
                <h1>محمد سیف الهی</h1>
              </div>
              <div className="flex gap-x-1">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
              </div>
            </div>
            <div className="px-4 text-md font-Yek-Light text-gray-600">
              <p>
                کافیست بر روی گزینه ارسال نظر کلیک کنید وکرده و بروی دکمه ثبت
                کلیک
              </p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="w-[550px] border-[0.1px] border-gray-300 rounded-lg h-[150px]  z-0">
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-x-2 text-lg font-Yek-ExtraBlack text-gray-600">
                <button className="bg-gray-200 p-3 rounded-full">
                  <LuUser2 color="#333" size={30} />
                </button>
                <h1>محمد سیف الهی</h1>
              </div>
              <div className="flex gap-x-1">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
              </div>
            </div>
            <div className="px-4 text-md font-Yek-Light text-gray-600">
              <p>
                کافیست بر روی گزینه ارسال نظر کلیک کنید وکرده و بروی دکمه ثبت
                کلیک
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        ref={prevRef}
        className="bg-white p-4 shadow-lg rounded-xl absolute bottom-40 z-10 right-[250px]"
        onClick={() => {
          prevRef.current = prevRef.current - 1;
        }}
      >
        <FaArrowDown color="#0e33ea" />
      </button>
    </div>
  );
};

export default CommetsSlider;
