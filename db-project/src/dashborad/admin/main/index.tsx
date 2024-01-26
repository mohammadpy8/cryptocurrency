import { FC, useEffect, useState } from 'react'
import DatePickers from '../../../module/datePicker'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import images from '../../../assets/images/btcadmin.png'
import useLocalStorage from '../../../hooks/useLocalStorage'

interface UserInfos {
  username?: string
  password?: string
  is_staff?: string
  full_name?: string
}

type itemsData = {
  id: number
  username: number
  full_name: string
  is_staff: string
}

interface masterType {
  title: string
  price: string
  description: string
  inventory: string
  country: ''
}

type listArz = {
  id: number
  title: string
  price: number
  status: string
  user: { full_name: string }
}

const MainAdminPanel: FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfos>({
    username: '',
    password: '',
    is_staff: '',
    full_name: '',
  })
  const [listMasterCart, setListMasterCart] = useState<masterType[]>([])
  const [listArz, setListArzs] = useState<listArz[]>([])
  const [users, setUsers] = useState<itemsData[]>([])

  const getToken = useLocalStorage('', 'GET')
  console.log(getToken)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/customer/me/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setUserInfo(result))

    fetch('http://127.0.0.1:8000/digital/mastercarts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('result', result)
        setListMasterCart(result)
      })
    fetch('http://127.0.0.1:8000/digital/currencies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setListArzs(result))
    fetch('http://127.0.0.1:8000/digital/customer/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setUsers(result))
  }, [])

  return (
    <div className="p-12">
      <div className="bg-white w-[550px] h-20  rounded-xl">
        <div className="flex items-center gap-x-2 p-6">
          <h1 className="text-2xl font-Yek-ExtraBlack text-gray-600">
            عزیز {userInfo.full_name}😍;
          </h1>
          <span className="text-md font-Yek-Regular">
            به جمع تیم ارز ایرانیان خوش آمدی👋🏻
          </span>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
          <h1>سوابق من</h1>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="bg-white py-3 px-4 rounded-xl w-[370px] flex gap-x-4 hover:shadow-md transition-all duration-300">
            <div className="bg-gray-700 flex items-center px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 h-8 text-white"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M8.07 3v2.514M15.93 3v2.514M3.833 15.249a13.202 13.202 0 0 1 0-5.896c.616-2.684 2.664-4.78 5.287-5.41a12.33 12.33 0 0 1 5.76 0c2.623.63 4.671 2.726 5.287 5.41a13.2 13.2 0 0 1 0 5.896c-.616 2.684-2.664 4.78-5.287 5.41a12.33 12.33 0 0 1-5.76 0c-2.623-.63-4.671-2.726-5.287-5.41Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m10 12.4 1.454 1.6L14 11"
                ></path>
              </svg>
            </div>
            <div>
              <h1 className="text-gray-600 font-Yek-Regular">تاریخ پیوستن</h1>
              <p>
                <DatePickers />
              </p>
            </div>
          </div>
          <div className="bg-white py-3 px-4 rounded-xl w-[370px] flex gap-x-4 hover:shadow-md transition-all duration-300">
            <div className="bg-green-500 flex items-center px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                className="w-8 h-8 text-white"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.667 11.16V3.113c0-.8-.654-1.393-1.447-1.326h-.04c-1.4.12-3.527.833-4.713 1.58l-.114.073a.739.739 0 0 1-.706 0l-.167-.1C6.293 2.6 4.173 1.893 2.773 1.78a1.312 1.312 0 0 0-1.44 1.327v8.053c0 .64.52 1.24 1.16 1.32l.194.027c1.446.193 3.68.926 4.96 1.626l.026.014c.18.1.467.1.64 0 1.28-.707 3.52-1.447 4.974-1.64l.22-.027c.64-.08 1.16-.68 1.16-1.32ZM8 3.66v10m-2.833-8h-1.5m2 2h-2"
                ></path>
              </svg>
            </div>
            <div>
              <h1 className="text-gray-600 font-Yek-Regular">تعداد محصولات</h1>
              <p className="text-xl font-Yek-ExtraBlack">
                {numberConvertToPersian(listArz.length + listMasterCart.length)}
              </p>
            </div>
          </div>
          <div className="bg-white py-3 px-4 rounded-xl w-[370px] flex gap-x-4 hover:shadow-md transition-all duration-300">
            <div className="bg-blue-600 flex items-center px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-gray-600 font-Yek-Regular">تعداد کاربران</h1>
              <p className="text-xl font-Yek-ExtraBlack">
                {numberConvertToPersian(users.length)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
          <h1>آخرین محصولات اضاه شده به سایت</h1>
        </div>
        <div className="bg-white mt-4 rounded-xl p-8">
          <div className="text-lg font-Yek-ExtraBlack flex gap-x-1 mb-2 text-gray-700">
            <h1>تعداد:</h1>
            <p>{numberConvertToPersian(4)}</p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
              <div>
                <img
                  src={images}
                  alt="btc"
                  className="w-28 h-28 rounded-full object-fill"
                />
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  محصول
                </h1>
                <p className="text-lg text-gray-700 font-Yek-Regular">
                  ارز دیجیتال بیت کوین
                </p>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  قیمت
                </h1>
                <p className="text-lg font-Yek-Regular text-red-600">
                  {numberConvertToPersian(1560000)}تومان
                </p>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  دسته بندی
                </h1>
                <div className="flex gap-x-4 p-3">
                  <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>ارز دیجیتال</span>
                  </div>
                  <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>بیت کوین</span>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  عرضه کننده
                </h1>
                <p className="text-lg text-gray-700 font-Yek-Regular">
                  آقای سیف الهی
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
              <div>
                <img
                  src={images}
                  alt="btc"
                  className="w-28 h-28 rounded-full object-fill"
                />
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  محصول
                </h1>
                <p className="text-lg text-gray-700 font-Yek-Regular">
                  ارز دیجیتال بیت کوین
                </p>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  قیمت
                </h1>
                <p className="text-lg font-Yek-Regular text-red-600">
                  {numberConvertToPersian(1560000)}تومان
                </p>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  دسته بندی
                </h1>
                <div className="flex gap-x-4 p-3">
                  <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>ارز دیجیتال</span>
                  </div>
                  <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>بیت کوین</span>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  عرضه کننده
                </h1>
                <p className="text-lg text-gray-700 font-Yek-Regular">
                  آقای سیف الهی
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
              <div>
                <img
                  src={images}
                  alt="btc"
                  className="w-28 h-28 rounded-full object-fill"
                />
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  محصول
                </h1>
                <p className="text-lg text-gray-700 font-Yek-Regular">
                  ارز دیجیتال بیت کوین
                </p>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  قیمت
                </h1>
                <p className="text-lg font-Yek-Regular text-red-600">
                  {numberConvertToPersian(1560000)}تومان
                </p>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  دسته بندی
                </h1>
                <div className="flex gap-x-4 p-3">
                  <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>ارز دیجیتال</span>
                  </div>
                  <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                    <span>بیت کوین</span>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                  عرضه کننده
                </h1>
                <p className="text-lg text-gray-700 font-Yek-Regular">
                  آقای سیف الهی
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAdminPanel
