import { FC } from 'react'
import ShowCoin from '../../template/showCoin'

const Arzs : FC= () => {
  return (
    <div>
      <div className="bg-[#eef0f7] h-[500px]">
        <div className="container">
          <div className="pt-20">
            <div className="text-4xl font-Yek-Bold text-gray-700">
              <h1> قیمت ارزهای دیجیتال </h1>
            </div>
            <div className="w-[500px] mt-7 text-lg font-Yek-Regular text-gray-800 text-justify">
              <span>
                قیمت ارزهای دیجیتال ( ۰۳ دی ۱۴۰۲ ) به صورت نرخ لحظه ای و جهانی
                در صرافی کیف پول من با قابلیت برسی قیمت بیش از 2000 رمز ارز و
                مشاهده دقیق نمودار و اندیکاتور های روز دنیا به صورت خطی ، ستونی
                و منطقه ای و امکان خرید و فروش با قیمت مورد نظر شما به ریال (
                تومان ) و دلار در ایران .
              </span>
            </div>
            <div className='mt-6'>
              <button className="px-3 py-2 text-white rounded-lg bg-primary-300 font-Yek-SemiBold">
                ثبت نام/ ورود
              </button>
            </div>
          </div>
          <div className="bganim z-0"></div>
        </div>
      </div>
      <div className='container mt-[-140px]'>
        <ShowCoin currency="usd" show={true} numberPage={20} />
      </div>
    </div>
  )
}

export default Arzs
