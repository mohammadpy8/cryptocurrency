import { FC } from "react";
import { Link } from "react-router-dom";

const LastSection: FC = () => {
  return (
    <div className="money h-80 mt-64 rounded-xl">
      <div className="flex justify-center mt-4">
        <h1 className="text-5xl font-Yek-ExtraBlack text-primary-300">
          درآمد میلیونی در کیف پول من
        </h1>
      </div>
      <div className="flex justify-center max-w-[700px] text-center items-center mt-4 mx-auto">
        <span className="text-lg text-gray-800 font-Yek-SemiBold">
          با ثبت نام در کیف پول من و دعوت دوستان خود از طریق لینک زیر مجموعه
          گیری , 20 درصد از کارمزد معاملات آنها را به صورت مادام العمر هدیه
          بگیرید .
        </span>
      </div>
      <div className="flex justify-center mt-12">
        <Link to="/login">
          <div className="relative overflow-hidden">
            <button className="bg-primary-500 btn-shine text-white font-Yek-ExtraBlack text-lg p-3 rounded-lg hover:ring-[7px] transition-all duration-300">
              ثبت نام / ورود
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LastSection;
