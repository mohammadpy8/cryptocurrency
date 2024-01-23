import { FC, useContext, useEffect, useState } from 'react'
import InfoMasterCart from '../../template/infoMasterCart'
import MasterIcon from '../../assets/images/shopi.webp'
import { TbShoppingCartDollar } from 'react-icons/tb'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft, FaCcMastercard } from 'react-icons/fa'
import images from '../../assets/images/preview.png'
import { GiMoneyStack } from 'react-icons/gi'
import { SiUnitednations } from 'react-icons/si'
import { RxTimer } from 'react-icons/rx'
import { FaPlus } from 'react-icons/fa6'
import { IoMdCart } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import useLocalStorage from '../../hooks/useLocalStorage'
import { ThreeDots } from 'react-loader-spinner'
import { CartContext } from '../../context/CartProviderContext'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import randomImages from '../../shared/randomImages'

const MasterShop: FC = () => {
  const [arzCount, setArzCount] = useState<number>(20)
  const [masterOffer, setMasterOffer] = useState<number>(20)
  const [masterPrice, setMasterPrice] = useState<number>(165000000)
  const [step, setStep] = useState<number>(0)
  const [listMasterCart, setListMasterCart] = useState<any>([])

  const CartContextMaster = useContext(CartContext)
  console.log('aa', CartContextMaster)

  const getToken = useLocalStorage('', 'GET')

  console.log(listMasterCart)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/mastercarts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setListMasterCart(result)
      })
  }, [])

  return (
    <div className="container MasterPhoto">
      <InfoMasterCart />
      <div className="flex justify-between">
        <div>
          <div className="mt-16 flex items-center">
            <img src={MasterIcon} alt="master" className="w-24" />
            <h1 className="text-5xl font-Yek-ExtraBlack text-primary-400">
              مستر کارت
            </h1>
          </div>
          <div className="mt-4 text-3xl font-Yek-ExtraBlack mr-4">
            <h1>معتبر ترین مستر کارت ها را از ما بخواهید</h1>
          </div>
        </div>
        <div>
          <Link to="/cart">
            <div className="bg-primary-400 pl-2 pr-4 py-2 flex items-center gap-x-2 rounded-lg relative shadow-lg mt-20 hover:ring-[7px] transition-all duration-300 cursor-pointer">
              <h1 className="text-lg text-white font-Yek-ExtraBlack">
                سبد خرید
              </h1>
              <button>
                <IoMdCart color="#fff" size={45} />
              </button>
              <span className="absolute top-2 left-10 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-center text-md text-white font-Yek-ExtraBold">
              {numberConvertToPersian(CartContextMaster?.state.itemsCounter)}
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
      <div className="mt-40 flex flex-wrap gap-x-24 gap-y-[170px] mx-10">
        {listMasterCart.length > 0 ? (
          listMasterCart.map((item: any) => {
            const { title, price, country, id } = item
            return (
              <div
                className=" w-[350px] rounded-2xl h-[390px]  relative master_Cart z-0"
                key={id}
              >
                <div className="absolute top-[-110px] left-4 bg-red-600 flex text-white px-2 text-lg font-Yek-ExtraBold text-center rounded-xl z-10">
                  <h1>{numberConvertToPersian(masterOffer)}</h1>
                  <span>%</span>
                </div>
                <div className="rounded-xl">
                  <img
                    src={randomImages(country)}
                    alt="images"
                    className="w-[300px] h-56 object-fill rounded-xl absolute top-[-100px] right-6 z-0"
                  />
                </div>
                <div className="flex gap-x-4 p-3 mt-32">
                  <div className="bg-blue-700 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>مستر کارت</span>
                  </div>
                  <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>{country}</span>
                  </div>
                </div>
                <div className="flex gap-x-2 items-center mr-4 text-xl font-Yek-ExtraBlack text-white">
                  <FaCcMastercard size={30} color="#ffc100" />
                  <h1>مسترکارت:</h1>
                  <span>{title}</span>
                </div>
                <div className="flex gap-x-2 mr-4 my-4">
                  <GiMoneyStack size={30} color="#27ff00" />
                  <h1 className="text-xl font-Yek-ExtraBlack text-white">
                    قیمت :
                  </h1>
                  <span className="text-xl font-Yek-ExtraBlack text-red-700">
                    {numberConvertToPersian(price?.toLocaleString())}تومان
                  </span>
                </div>
                <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
                  <SiUnitednations size={30} color="#0000ff" />
                  <h1>کشور:</h1>
                  <span>{country}</span>
                </div>
                <div className="flex gap-x-2 mr-4 text-xl font-Yek-ExtraBlack text-white mt-4">
                  <RxTimer size={30} color="red" />
                  <h1>اعتبار:</h1>
                  <span>سه سال</span>
                </div>
                <div className="flex items-center gap-x-2 justify-center mb-8 absolute -bottom-16 right-[28px]">
                  <Link to={`/master-shop/${id}`}>
                    <button className="flex bg-primary-300 rounded-lg px-2 py-5 items-center gap-x-2 hover:ring-[7px] transition-all duration-300">
                      <span className="text-[11px] text-white font-Yek-ExtraBlack">
                        توضیحات و خرید مسترکارت
                      </span>
                      <FaLongArrowAltLeft color="#fff" size={20} />
                    </button>
                  </Link>
                  <button
                    className="text-white bg-[#4c28ff] rounded-lg font-Yek-ExtraBlack text-[11px] py-[22px] px-7 hover:ring-[7px] transition-all duration-300 ring-[#ead7ff]"
                    onClick={() => {
                      CartContextMaster?.dispatch({
                        type: 'ADD_ITEM',
                        payload: item,
                      })
                      toast.success('محصول به سبد خرید اضافه شد')
                    }}
                  >
                    اضافه به سبدخرید
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
      <div className="flex justify-center mt-20 pb-10">
        <button className="bg-[#4c20ff] flex text-white items-center gap-x-2 px-3 py-4 rounded-lg shadow-2xl hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
          <span className="text-lg font-Yek-ExtraBold">محصولات بیشتر</span>
          <FaPlus color="#fff" size={15} />
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default MasterShop
