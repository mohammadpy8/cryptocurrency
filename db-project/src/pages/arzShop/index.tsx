import { FC, useContext, useEffect, useState } from 'react'
import { TbShoppingCartDollar } from 'react-icons/tb'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import images from '../../assets/images/btcc.avif'
import { FaLongArrowAltLeft, FaPlus } from 'react-icons/fa'
import { FaUserPen } from 'react-icons/fa6'
import ArzIcon from '../../assets/images/shopi.webp'
import { Link } from 'react-router-dom'
import ArzIcons from '../../assets/images/Arzzz.webp'
import { MdOutlineAddCard } from 'react-icons/md'
import { GiMoneyStack } from 'react-icons/gi'
import { LuBadgeDollarSign } from 'react-icons/lu'
import { IoIosArrowDown, IoMdCart } from 'react-icons/io'
import useLocalStorage from '../../hooks/useLocalStorage'
import { ThreeDots } from 'react-loader-spinner'
import { CartContext } from '../../context/CartProviderContext'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import randomImages from '../../shared/randomImages'

const ArzShop: FC = () => {
  const [arzCount, setArzCount] = useState<number>(12)
  const [arzTotal, setTotal] = useState<number>(1500)
  const [arzOffer, setArzOffer] = useState<number>(10)
  const [arzPrice, setArzPrice] = useState<number>(165820888550)
  const [step, setStep] = useState<number>(0)
  const [listArzs, setListArzs] = useState<any>([])
  console.log(listArzs)

  const getToken = useLocalStorage('', 'GET')

  const ScrollToMaster = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth',
    })
  }

  console.log('access', listArzs)

  const CartArzContext = useContext(CartContext)
  console.log(CartArzContext)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/currencies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setListArzs(result.filter((item: any) => item.status === 'a'))
      })
  }, [])

  return (
    <div className="container mt-6 arzPhoto">
      <div className="flex justify-between">
        <div className="font-Yek-ExtraBlack space-y-8">
          <h1 className="textColorArz text-6xl">خرید ارز دیجیتال </h1>
          <h1 className="text-6xl">از ارز دیجینال ایرانیان</h1>
          <div className="text-justify w-[750px]">
            <span className="text-[17px] font-Yek-SemiBold leading-8">
              برای اولین بار در ایران، کیف پول من امکان دریافت مستر کارت و ویزا
              کارت فیزیکی و اختصاصی برای شما را فراهم کرده است. کیف پول من شرکتی
              پیشگام در ارائه خدمات نو می باشد که با ارائه مستر کارت و ویزا کارت
              اختصاصی، برای شما لذت استفاده از دنیایی بدون مرز و محدودیت های
              مالی را فراهم کرده است ⚡️ امروزه تیم حرفه ای کیف پول من با
              قراردادهای رسمی و بین المللی با بیش از ۵۶ بانک جهانی توانسته اند
              یک مسیر ایمن و بدون محدودیت را بسازند تا همه ایرانیان بتوانند طعم
              دنیایی بدون مرز و تحریم را بچشند. با کیف پول من برای دریافت مستر
              کارت نیازی به حساب خارجی و پاسپورت نیست! فقط یک شماره تلفن و اسم
              کافیه! 🔥
            </span>
          </div>
          <div className="mt-16">
            <button
              className="flex gap-x-2 bg-primary-300 text-white p-3 rounded-2xl font-Yek-Bold items-center hover:ring-4 transition-all duration-300"
              onClick={ScrollToMaster}
            >
              <MdOutlineAddCard color="#fff" size={30} />
              <span>ثبت سفارش</span>
            </button>
          </div>
        </div>
        <div>
          <img src={ArzIcons} alt="arzicons" />
        </div>
      </div>
      <div className="flex justify-between mt-16">
        <div className="space-y-4 px-4 py-2">
          <div className="flex gap-x-2 items-center">
            <img src={ArzIcon} alt="arz" className="w-16" />
            <h1 className="text-5xl text-primary-300 font-Yek-ExtraBlack">
              خرید ارز
            </h1>
          </div>
          <div>
            <span className="text-2xl font-Yek-ExtraBlack">
              خرید انواع ارز در فروشگاه ارز دیجیتال ایرانیان
            </span>
          </div>
        </div>
        <div>
          <Link to="/cart">
            <div className="bg-primary-400 pl-2 pr-4 py-2 flex items-center gap-x-2 rounded-lg relative shadow-lg hover:ring-[7px] transition-all duration-300 mt-12">
              <h1 className="text-lg text-white font-Yek-ExtraBlack">
                سبد خرید
              </h1>
              <button>
                <IoMdCart color="#fff" size={40} />
              </button>
              <span className="absolute top-2 left-9 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-center text-md text-white font-Yek-ExtraBold">
                {numberConvertToPersian(CartArzContext?.state?.itemsCounter)}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mt-12 mr-4">
        <div className="relative">
          <div className="absolute z-10 -top-7">
            <div
              className={
                step === 1
                  ? 'bg-white h-36 rounded-xl shadow-sm transition-all duration-300 w-[250px]'
                  : 'bg-white h-14 rounded-xl shadow-sm transition-all duration-300 w-[250px]'
              }
              onClick={() => setStep(step !== 1 ? 1 : 0)}
            >
              <div className="flex items-center gap-x-28 px-2 py-4">
                <h1 className="text-lg font-Yek-SemiBold text-gray-600">
                  مرتب سازی
                </h1>
                <div
                  className={
                    step === 1
                      ? '-rotate-180 transition-all duration-300'
                      : 'rotate-0 transition-all duration-300'
                  }
                >
                  <IoIosArrowDown size={25} color="#333" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-10 -top-7 right-[280px]">
            <div
              className={
                step === 2
                  ? 'bg-white h-36 rounded-xl shadow-sm transition-all duration-300 w-[250px]'
                  : 'bg-white h-14 rounded-xl shadow-sm transition-all duration-300 w-[250px]'
              }
              onClick={() => setStep(step !== 2 ? 2 : 0)}
            >
              <div className="flex items-center gap-x-28 px-2 py-4">
                <h1 className="text-lg font-Yek-SemiBold text-gray-600">
                  کشور کارت
                </h1>
                <div
                  className={
                    step === 2
                      ? '-rotate-180 transition-all duration-300'
                      : 'rotate-0 transition-all duration-300'
                  }
                >
                  <IoIosArrowDown size={25} color="#333" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[55%] relative">
          <input
            className="w-full outline-none shadow-sm border-solid placeholder:text-gray-400 placeholder:select-none text-lg py-[13px] rounded-xl placeholder:text-right pr-12 pl-3 bg-white font-Yek-SemiBold"
            placeholder="جست و جو در میان مستر کارت..."
            type="text"
          />
          <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-cnBlack-10 dark:border-gray-300 pl-2 right-3 border-l-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="transition-all w-5 h-5 md:w-6 md:h-6 text-cnBlack-10 dark:text-gray-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex gap-x-2 text-lg mt-8 text-gray-700 font-Yek-Bold border-b-4 border-gray-400 w-[150px]">
        <h1>تعداد کل:</h1>
        <span>{numberConvertToPersian(listArzs.length)}</span>
      </div>
      <div className="mt-32 flex flex-wrap gap-x-24 gap-y-[160px] mx-10">
        {listArzs.length > 0 ? (
          listArzs.map((item: any) => {
            const {
              id,
              title,
              price,
              user: { full_name },
            } = item
            return (
              <div
                className=" w-[350px] rounded-2xl h-[350px]  relative cardArz"
                key={id}
              >
                <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
                  <h1>{numberConvertToPersian(arzOffer)}</h1>
                  <span>%</span>
                </div>
                <div>
                  <img
                    src={randomImages(title)}
                    alt="images"
                    className="w-[300px] h-56 object-cover rounded-xl absolute top-[-100px] right-6 z-0"
                  />
                </div>
                <div className="flex gap-x-4 p-3 mt-32">
                  <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>ارز دیجیتال</span>
                  </div>
                  <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>{title}</span>
                  </div>
                </div>
                <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white">
                  <LuBadgeDollarSign color="red" size={30} />
                  <h1>ارز:</h1>
                  <span>{title}</span>
                </div>
                <div className="flex gap-x-2 mr-4 my-4">
                  <GiMoneyStack color="#27ff00" size={30} />
                  <h1 className="text-xl font-Yek-ExtraBlack text-white">
                    قیمت دلاری:
                  </h1>
                  <span className="text-xl font-Yek-ExtraBlack text-red-800">
                    ${numberConvertToPersian(price.toLocaleString())}
                  </span>
                </div>
                <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
                  <FaUserPen color="#0000ff" size={30} />
                  <h1>عرضه کننده:</h1>
                  <span>{full_name}</span>
                </div>
                <div className="flex items-center gap-x-8 mb-8 absolute -bottom-16 right-[28px]">
                  <Link to={`/arz-shop/${id}`}>
                    <button className="flex bg-primary-300 rounded-lg px-2 py-5 items-center gap-x-2 hover:ring-[7px] transition-all duration-300">
                      <span className="text-[11px] text-white font-Yek-ExtraBlack">
                        توضیحات و خرید ارز
                      </span>
                      <FaLongArrowAltLeft color="#fff" size={20} />
                    </button>
                  </Link>
                  <button
                    className="text-white bg-[#4c28ff] rounded-lg font-Yek-ExtraBlack text-[11px] py-[22px] px-7 hover:ring-[7px] transition-all duration-300 ring-[#ead7ff]"
                    onClick={() => {
                      CartArzContext?.dispatch({
                        type: 'ADD_ITEM',
                        payload: item,
                      })
                      toast.success('محصول به سبد خرید اضافه شد')
                    }}
                  >
                    اضافه به سبد خرید
                  </button>
                </div>
              </div>
            )
          })
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
      </div>
      {/* <div className="flex justify-center mt-20 pb-2">
        <button className="bg-primary-400 flex text-white items-center gap-x-2 px-3 py-4 rounded-lg shadow-2xl hover:ring-[7px] transition-all duration-300">
          <span className="text-lg font-Yek-ExtraBold">محصولات بیشتر</span>
          <FaPlus color="#fff" size={15} />
        </button>
      </div> */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default ArzShop
