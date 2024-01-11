import { FC } from 'react'
import ImgMain from '../../assets/images/text.svg'
import Button from '../../interface/Button'
import { BiTimeFive } from 'react-icons/bi'
import { GrShieldSecurity } from 'react-icons/gr'

const MainText: FC = () => {
  const clickHandler = () => {}

  return (
    <div className="mt-16">
      <div className="flex items-center">
        <h1 className="font-Yek-Regular text-4xl text-gray-600">
          ارز دیجیتال ایرانیان
        </h1>
        <img src={ImgMain} alt="mainImg" className="w-36" />
        <h1 className="font-Yek-Regular text-4xl text-gray-600">
          صرافی ارز دیجیتال
        </h1>
      </div>
      <div className="mt-8 w-[750px] space-y-8">
        <div>
          <h1 className="text-6xl font-Yek-ExtraBlack text-gray-700">
            خرید و فروش ارزدیجیتال <span className="text-primary-100">در</span>
          </h1>
        </div>
        <div>
          <span className="text-6xl font-Yek-ExtraBlack text-primary-100">
            صرافی ارز دیجیتال ایرانیان
          </span>
        </div>
      </div>
      <div className="w-[680px] text-justify font-Yek-Regular text-[15px] mt-8">
        <span className="font-Yek-Regular text-gray-600 leading-loose">
          <span className="font-Yek-SemiBold text-black">خرید ارز دیجیتال</span>
          در کیف پول من اولین سامانه نگهداری ارزهای دیجیتال پیشگام کشور انجام
          می‌شود که با سبک و استانداردهای جدید، سرویس‌های نگهداری و خرید رمز
          ارزهای الکترونیک را برای افراد حقیقی و حقوقی آماده کرده است. ما هر
          روزه، هزاران تراکنش واریزی و دریافتی را در بسیاری حیطه‌ها همچون خرید
          بیت کوین بر بستر کیف پول من، بدون کوچک‌ترین خطایی به گردش در می‌آوریم؛
          با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک
          به رشد و توسعه کسب‌وکارها، نقش سازنده و موثری داشته باشیم. امروز کیف
          پول من نقش موثری در رشد و ارتقاء کیفیت خرید و فروش ارز دیجیتال در
          بازار کشور دارد.
        </span>
      </div>
      <div className="mt-12 flex items-center gap-x-4">
        <Button
          styles="text-white bg-primary-100 p-3 font-Yek-Bold rounded-lg hover:bg-primary-50 transition-all duration-300"
          clickHandler={clickHandler}
        >
          <h1>ورود به پنل کاربری</h1>
        </Button>
        <Button
          styles="text-primary-100 font-Yek-Bold border-[1px] p-3 rounded-lg hover:text-gray-500 transition-all duration-300"
          clickHandler={clickHandler}
        >
          <h1>درباره ارزدیجیتال ایرانیان</h1>
        </Button>
      </div>
      <div className='mt-8 mr-4 flex gap-x-12 text-gray-700 font-Yek-Bold'>
        <div className='flex gap-x-2'>
          <BiTimeFive color="#3051f8" size={25}/>
          <h1>سرعت بالا در ثبت سفارش و انجام معاملات</h1>
        </div>
        <div className='flex gap-x-2'>
          <GrShieldSecurity color="#3051f8" size={25}/>
          <h1>خرید امن و مطمئن انواع رمزارزها</h1>
        </div>
      </div>
    </div>
  )
}

export default MainText
