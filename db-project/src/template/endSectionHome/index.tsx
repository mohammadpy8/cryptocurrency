import { FC } from 'react'
import Answer from '../../assets/images/infooooo.svg'
import RamzArz from '../../assets/images/ramzarz.svg'
import { FaArrowLeftLong } from 'react-icons/fa6'

const EndSectoinHome: FC = () => {
  return (
    <div className="mt-24 rounded-xl">
      <div className="mt-12">
        <div className="text-4xl font-Yek-ExtraBlack text-primary-400 flex items-center justify-center">
          <h1>کیف پول من تنها یک کیف پول ساده نیست</h1>
        </div>
        <div className="text-[17px] text-center flex justify-center px-56 font-Yek-Regular mt-4 leading-8 text-gray-600">
          <span>
            در این صرافی شما می‌توانید بیت کوین (Bitcoin)، اتریوم (ETH)، لایت
            کوین (Litecoin) و 2,000 ارز دیجیتال دیگر را خرید و فروش کنید. همچنین
            در کنار این ها بهره بردن از پشتیبانی 24 ساعته باعث شده همواره
            پاسخگوی تمام سوالات و مشکلات احتمالی کاربران باشیم.
          </span>
        </div>
        <div className="flex gap-x-6 px-72 mt-12">
          <div className="bg-gray-100 shadow-sm rounded-lg w-[370px] h-[350px]">
            <div className="bg-white flex justify-center mt-10 py-10 w-40 items-center rounded-xl mr-24">
              <img src={Answer} alt="answer" />
            </div>
            <div className="mt-8 flex justify-center text-lg font-Yek-ExtraBlack text-gray-500">
              <h1>پاسخ به سوالات متداول</h1>
            </div>
            <div className="flex items-center gap-x-2 mt-6 justify-center">
              <span className="text-lg font-Yek-Bold text-primary-200">
                بیشتر بدانید
              </span>
              <FaArrowLeftLong color="#193df3" size={20} />
            </div>
          </div>
          <div className="bg-gray-100 shadow-sm rounded-lg w-[370px] h-[350px]">
            <div className="bg-white flex justify-center mt-10 py-10 w-40 items-center rounded-xl mr-24">
              <img src={RamzArz} alt="answer" className="h-20" />
            </div>
            <div className="mt-8 flex justify-center text-lg font-Yek-ExtraBlack text-gray-500">
              <h1>بخش بازار رمز ارز</h1>
            </div>
            <div className="flex items-center gap-x-2 mt-6 justify-center">
              <span className="text-lg font-Yek-Bold text-primary-200">
                بیشتر بدانید
              </span>
              <FaArrowLeftLong color="#193df3" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <div className="flex gap-x-5 items-center">
          <h1 className='text-lg font-Yek-SemiBold text-gray-600'>همین حالا به ما بپیوندید</h1>
          <button className="bg-primary-300 text-white flex items-center gap-x-2 text-lg font-Yek-Regular py-3 px-2 rounded-lg transition-all duration-300 hover:ring-[7px]">
            <span>ثبت نام در ایرانیان</span>
            <FaArrowLeftLong />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EndSectoinHome
