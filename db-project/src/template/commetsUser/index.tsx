import { FC } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import useCounter from '../../hooks/useCounter'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import CommetsSlider from '../../module/commentSlider'

const CommentsUsers: FC = () => {
  const [users] = useCounter(1500)
  const [transfer] = useCounter(2500)
  const [order] = useCounter(2500)

  return (
    <div className="mt-20">
      <div className="text-4xl font-Yek-ExtraBlack text-primary-300 flex justify-center">
        <h1>نظرات کاربران ارز دیجیتال ایرانیان</h1>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-3xl font-Yek-ExtraBlack text-primary-200 mt-10">
            <h1>مهندسی شده برای رشد و اطمینان بیش‌تر</h1>
          </div>
          <div className="w-[600px] mt-8 text-justify">
            <span className="leading-8 text-md font-Yek-Regular text-gray-600">
              کیف پول من یک سیستم کاملا هوشمند دیجیتالی میباشد که شما میتوانید
              تمامی خدمات خرید و فروش ارز دیجیتال ، نگهداری ارز دیجیتال ، خرید
              خدمات و پرداخت قبوض با ارز دیجیتال را در این سیستم تجربه کنید .
            </span>
          </div>
          <div className="mt-12">
            <Link to="/login">
              <button className="bg-primary-300 rounded-lg flex items-center gap-x-2 p-3 hover:ring-[7px] transition-all duration-300">
                <span className="text-lg text-white font-Yek-ExtraBlack">
                  افتتاح حساب ایرانیان
                </span>
                <FaArrowLeftLong color="#fff" size={20} />
              </button>
            </Link>
          </div>
          <div className="mt-16 flex gap-x-8">
            <div className="flex flex-col">
              <h1 className="font-Yek-ExtraBold text-lg">تعداد کاربران</h1>
              <span className="text-4xl font-Yek-ExtraBlack">
                {numberConvertToPersian(users)}
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-Yek-ExtraBold text-lg">تعداد تراکنش ها</h1>
              <span className="text-4xl font-Yek-ExtraBlack">
                {numberConvertToPersian(transfer)}
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-Yek-ExtraBold text-lg">تعداد سفارش ها</h1>
              <span className="text-4xl font-Yek-ExtraBlack">
                {numberConvertToPersian(order)}
              </span>
            </div>
          </div>
        </div>
        <div className='h-[400px] mt-20'>
          <CommetsSlider />
        </div>
      </div>
    </div>
  )
}

export default CommentsUsers
