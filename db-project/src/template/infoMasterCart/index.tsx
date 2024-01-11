import { FC } from 'react'
import MasterCart from '../../assets/images/hand.png'
import { MdOutlineAddCard } from 'react-icons/md'

const InfoMasterCart: FC = () => {
  const ScrollToMaster = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth',
    })
  }

  return (
    <div className=" flex justify-between items-center">
      <div className="w-[60%] mt-[-100px]">
        <div className="font-Yek-ExtraBlack text-6xl">
          <div className="mb-4">
            <span>خرید</span>
            <span className="textColor">مسترکارت اختصاصی</span>
          </div>
          <span>با نام شخصی خودتان</span>
        </div>
        <div className="w-[90%] mt-5 text-justify text-md font-Yek-Bold">
          <span>
            برای اولین بار در ایران، کیف پول من امکان دریافت مستر کارت و ویزا
            کارت فیزیکی و اختصاصی برای شما را فراهم کرده است. کیف پول من شرکتی
            پیشگام در ارائه خدمات نو می باشد که با ارائه مستر کارت و ویزا کارت
            اختصاصی، برای شما لذت استفاده از دنیایی بدون مرز و محدودیت های مالی
            را فراهم کرده است ⚡️ امروزه تیم حرفه ای کیف پول من با قراردادهای
            رسمی و بین المللی با بیش از ۵۶ بانک جهانی توانسته اند یک مسیر ایمن و
            بدون محدودیت را بسازند تا همه ایرانیان بتوانند طعم دنیایی بدون مرز و
            تحریم را بچشند. با کیف پول من برای دریافت مستر کارت نیازی به حساب
            خارجی و پاسپورت نیست! فقط یک شماره تلفن و اسم کافیه! 🔥
          </span>
        </div>
        <div className="mt-12">
          <button
            className="flex gap-x-2 bg-primary-300 text-white p-3 rounded-2xl font-Yek-Bold items-center hover:ring-4 transition-all duration-300"
            onClick={ScrollToMaster}
          >
            <MdOutlineAddCard color="#fff" size={30} />
            <span>ثبت سفارش</span>
          </button>
        </div>
      </div>
      <div className="w-[40%] mt-12">
        <img src={MasterCart} alt="master" className="w-[700px] h-[500px]" />
      </div>
    </div>
  )
}

export default InfoMasterCart
