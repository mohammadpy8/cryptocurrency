import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import crypto from "../../types/cryptoType/CryptoType";
import { getCoinList } from "../../services/cryptoApi";
import numberConvertToPersian from "../../shared/numberConvertToPersian";
import { ThreeDots } from "react-loader-spinner";

const SliderCoin = ({ border }: any) => {
  const [getCoin, setGetCoin] = useState<crypto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [currency, setCurrency] = useState<string>("usd");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = (await res.json()) as crypto[];
        setGetCoin(json);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page, currency]);

  console.log(getCoin);

  return (
    <Swiper
      className="sample-slider z-0"
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 0 }}
      slidesPerView={5}
      allowTouchMove={false}
      speed={5000}
    >
      {getCoin?.length > 0 ? (
        getCoin?.map((coins: crypto) => (
          <SwiperSlide key={coins?.id}>
            <div
              className={
                border
                  ? "bg-gray-200 w-[230px] h-12 mt-2 rounded-lg flex justify-between"
                  : "coinSwiper w-[230px] h-12 mt-2 rounded-lg flex justify-between"
              }
            >
              <div className="flex gap-x-2">
                <div className="p-1">
                  <img
                    src={coins?.image}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="mt-1">
                  <div className="font-Yek-Bold text-[12px]">
                    <h1>{coins?.name}</h1>
                  </div>
                  <div className="text-gray-600 text-sm font-Yek-SemiBold">
                    <h1>{coins?.current_price}$</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center ml-2">
                <div className="bg-white text-[12px] font-Yek-Bold px-1 py-1 rounded-md">
                  <h1
                    className={
                      coins?.market_cap_change_24h > 1
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {numberConvertToPersian(coins?.price_change_percentage_24h)}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#0023d0"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
    </Swiper>
  );
};

export default SliderCoin;
