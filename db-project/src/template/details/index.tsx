import { FC } from "react";
import LockIcon from "../../assets/images/lock.webp";
import ZeroIcon from "../../assets/images/Zero.webp";
import AlarmIcon from "../../assets/images/alarm.webp";
import BilingIcon from "../../assets/images/biling.webp"

const Details: FC = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-4xl text-primary-300 font-Yek-ExtraBlack">
          برای اولین بار درایران
        </h1>
        <span className="text-lg text-gray-700 font-Yek-SemiBold">
          خرید آنلاین انواع محصولات با امکان
          <span className="font-Yek-Bold text-orange-300">
            پرداخت ارز دیجیتال
          </span>
        </span>
      </div>
      <div className="container mt-10 flex justify-between">
        <div className="relative">
          <div className="w-24 h-24 rounded-full detailsSider"></div>
          <div className="w-64 h-48 cartDetails absolute top-12 right-[-75px] rounded-xl">
            <img
              src={LockIcon}
              alt="lockicon"
              className="absolute top-[-55px] right-10 hover:rotate-12 transition-all duration-300"
            />
            <div className="text-gray-700 flex flex-col gap-y-2 items-center mt-24">
              <h1 className="text-lg font-Yek-Bold">بالاترین امنیت برداشت</h1>
              <span className="text-sm font-Yek-SemiBold">قفل برداشت ارز و تایید انتقال با تماس </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-24 h-24 rounded-full detailsSider"></div>
          <div className="w-64 h-48 cartDetails absolute top-12 right-[-75px] rounded-xl">
            <img
              src={ZeroIcon}
              alt="lockicon"
              className="absolute top-[-55px] right-10 hover:rotate-12 transition-all duration-500"
            />
            <div className="text-gray-700 flex flex-col gap-y-2 items-center mt-24">
              <h1 className="text-lg font-Yek-Bold">کارمزد نگهداری رمز ارز</h1>
              <span className="text-sm font-Yek-SemiBold">کارمزد صفر نگهداری رمز ارز در کیف پول من</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-24 h-24 rounded-full detailsSider"></div>
          <div className="w-64 h-48 cartDetails absolute top-12 right-[-75px] rounded-xl">
            <img
              src={AlarmIcon}
              alt="lockicon"
              className="absolute top-[-55px] right-12 hover:rotate-12 transition-all duration-500"
            />
            <div className="text-gray-700 flex flex-col gap-y-2 items-center mt-24">
              <h1 className="text-lg font-Yek-Bold">پرداخت قبوض</h1>
              <span className="text-sm font-Yek-SemiBold">پرداخت کلیه قبوض در کیف پول من</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-24 h-24 rounded-full detailsSider"></div>
          <div className="w-64 h-48 cartDetails absolute top-12 right-[-75px] rounded-xl">
            <img
              src={BilingIcon}
              alt="lockicon"
              className="absolute top-[-55px] right-10 hover:rotate-12 transition-all duration-500"
            />
            <div className="text-gray-700 flex flex-col gap-y-2 items-center mt-24">
              <h1 className="text-lg font-Yek-Bold"> بسته اینترنت و شارژ</h1>
              <span className="text-sm font-Yek-SemiBold">خرید کلیه شارژ ها و بسته های اینترنت</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
