import { FC } from 'react'
import logo from '../../assets/images/kif.svg'
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaLinkedinIn,
} from 'react-icons/fa'
import { LuPhoneCall } from 'react-icons/lu'
import { IoMailOutline } from 'react-icons/io5'
import numberConvertToPersian from '../../shared/numberConvertToPersian'

const Footer: FC = () => {
  return (
    <div className="mt-20 border-t-2">
      <div className="mt-16 footer flex justify-between px-28">
        <div className="w-[40%]">
          <div>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="text-md font-Yek-Regular text-justify mt-8">
              <span className="text-gray-600">
                کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگام کشور است
                که با سبک و استانداردهای جدید، سرویس‌های نگهداری رمز ارزهای
                الکترونیک را برای افراد حقیقی و حقوقی آماده کرده است.
              </span>
            </div>
            <div className="flex justify-between mt-8">
              <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
                <FaYoutube color="#0e33ea" size={35} />
              </div>
              <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
                <FaLinkedinIn color="#0e33ea" size={35} />
              </div>
              <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
                <FaInstagram color="#0e33ea" size={35} />
              </div>
              <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
                <FaTwitter color="#0e33ea" size={35} />
              </div>
              <div className="bg-[#deedff] p-3 rounded-xl hover:-translate-y-2 transition-all duration-300">
                <FaTelegram color="#0e33ea" size={35} />
              </div>
            </div>
          </div>
          <div className="w-96 bg-[#deedff] px-3 py-4 flex items-center gap-x-4 rounded-xl mt-12">
            <div>
              <LuPhoneCall color="#0e33ea" size={45} />
            </div>
            <div className="space-y-2">
              <div>
                <h1 className="text-md text-primary-200 font-Yek-SemiBold">
                  شماره تماس:
                </h1>
              </div>
              <div>
                <span className="text-xl font-Yek-ExtraBlack text-gray-700">
                  {numberConvertToPersian('03433493017')}
                </span>
              </div>
            </div>
          </div>
          <div className="w-96 bg-[#deedff] px-3 py-4 flex items-center gap-x-4 rounded-xl mt-6">
            <div>
              <IoMailOutline color="#0e33ea" size={45} />
            </div>
            <div className="space-y-2">
              <div>
                <h1 className="text-md text-primary-200 font-Yek-SemiBold">
                  آدرس ایمیل:
                </h1>
              </div>
              <div>
                <span className="text-xl font-Yek-ExtraBlack text-primary-300">
                  Mohammadpy8@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h1 className="text-xl font-Yek-ExtraBlack text-primary-300">
              کیف پول من
            </h1>
          </div>
          <div>
            <ul className="space-y-4 text-[15px] font-Yek-Regular text-gray-600">
              <li>قیمت ارزهای دیجیتال</li>
              <li>قیمت ارز های متاورس</li>
              <li>دانلود اپلیکیشن</li>
              <li> استخراج بیت کوین</li>
              <li>تماس با ما</li>
              <li>سوالات متداول</li>
              <li>انتقادات و پیشنهادات</li>
              <li>قوانین و مقررات</li>
              <li>حریم خصوصی</li>
              <li>وبلاگ</li>
              <li>خرید بلیط هواپیما</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h1 className="text-xl font-Yek-ExtraBlack text-primary-300">
              کیف پول های برتر
            </h1>
          </div>
          <div>
            <ul className="space-y-4 text-[15px] font-Yek-Regular text-gray-600">
              <li>قیمت ارزهای دیجیتال</li>
              <li>قیمت ارز های متاورس</li>
              <li>دانلود اپلیکیشن</li>
              <li> استخراج بیت کوین</li>
              <li>تماس با ما</li>
              <li>سوالات متداول</li>
              <li>انتقادات و پیشنهادات</li>
              <li>قوانین و مقررات</li>
              <li>حریم خصوصی</li>
              <li>وبلاگ</li>
              <li>برداشت لیر ترکیه</li>
              <li>برداشت ارز</li>
              <li>خرید بلیط هواپیما</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h1 className="text-xl font-Yek-ExtraBlack text-primary-300">
              لینک های مفید
            </h1>
          </div>
          <div>
            <ul className="space-y-4 text-[15px] font-Yek-Regular text-gray-600">
              <li>قیمت ارزهای دیجیتال</li>
              <li>قیمت ارز های متاورس</li>
              <li>دانلود اپلیکیشن</li>
              <li> استخراج بیت کوین</li>
              <li>تماس با ما</li>
              <li>سوالات متداول</li>
              <li>انتقادات و پیشنهادات</li>
              <li>قوانین و مقررات</li>
              <li>حریم خصوصی</li>
              <li>وبلاگ</li>
              <li>برداشت لیر ترکیه</li>
              <li>برداشت ارز</li>
              <li>خرید بلیط هواپیما</li>
              <li>برداشت ارز</li>
              <li>برداشت ارز</li>
              <li>برداشت ارز</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-4 text-gray-600 font-Yek-Regular'>
        <h1>© كيف پول من - اولین سرویس کیف پول اختصاصی رمز ارز ایران .</h1>
      </div>
    </div>
  )
}

export default Footer
