import { FC } from "react";
import SliderCoin from "../../module/sliderCoin";
import DatePickers from "../../module/datePicker";
import { GoMoon } from "react-icons/go";

const SliderHeader: FC = () => {
  return (
    <div className="sliderHeader w-full relative flex items-center h-[70px] z-[2]">
      <div className="relative w-[10%] flex items-center gap-x-2 mx-4">
        <span className="w-4 h-4 bg-green-500 rounded-full dateDelay"></span>
        <div className="bg-[#eaeaea] px-2 py-1 rounded-lg">
          <DatePickers />
        </div>
      </div>
      <div className="w-[80%] relative">
        <SliderCoin />
      </div>
      <div className="relative w-[10%] mr-10">
        <div>
          <GoMoon color="#1685f3" size={30} className="hover:rotate-[-45deg] transition-all duration-300"/>
        </div>
      </div>
    </div>
  );
};

export default SliderHeader;
