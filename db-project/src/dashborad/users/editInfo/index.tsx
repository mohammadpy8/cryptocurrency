import { FC, useEffect, useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'

interface UserInfos {
  username?: string
  password?: string
  is_staff?: string
  full_name?: string
}

const EditInfo: FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfos>({
    username: '',
    password: '',
    is_staff: '',
    full_name: '',
  })
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
  }, [])
  return (
    <div className="mt-12">
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600 flex justify-center">
        <h1>اطلاعات حساب</h1>
      </div>
      <div className="text-sm font-Yek-Regular text-gray-600 flex justify-center mt-4">
        <div className="flex gap-x-2 items-center">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              className="w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div>شماره تلفن قابل ویرایش نیست!</div>
        </div>
      </div>
      <div className="bg-white mt-4 w-[600px] rounded-xl mr-[330px] h-auto mb-8">
        <div className="edit w-full h-32 rounded-t-xl relative">
          <div className="bg-white flex rounded-xl w-[150px] font-Yek-ExtraBlack text-gray-600 p-2 text-center absolute top-6 right-60 z-0">
            <h1 className="text-center">لذت خرید با ایرانیان!</h1>
          </div>
          <div className="bg-white w-[130px] h-[130px] absolute rounded-full top-20 right-24">
            <div className="edit w-[120px] h-[120px] mt-1 mb-0 mr-1 rounded-full flex justify-center items-center">
              <div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-8 h-8 text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mr-56">
          <h1 className="text-2xl text-gray-600 font-Yek-ExtraBlack">
            {userInfo.full_name}
          </h1>
          <p className="text-lg font-Yek-Bold text-gray-500">
            {userInfo.is_staff === 'True' ? 'ادمین ' : 'کاربر'}
          </p>
        </div>
        <div className="mt-20 px-24">
          <form>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-lg font-Yek-ExtraBold text-gray-600"
                >
                  نام
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="نام خود را وارد کنید"
                  className="outline-none bg-gray-100 w-[400px] py-3 rounded-xl px-2 font-Yek-Bold"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-lg font-Yek-ExtraBold text-gray-600"
                >
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  className="outline-none bg-gray-100 w-[400px] py-3 rounded-xl px-2 font-Yek-Bold"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="text-lg font-Yek-ExtraBold text-gray-600"
                >
                  رمز عبور
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  className="outline-none bg-gray-100 w-[400px] py-3 rounded-xl px-2 font-Yek-Bold"
                />
              </div>
            </div>
            <div className="mt-6 pb-7">
              <button className="text-white bg-primary-300 p-2 w-[400px] rounded-xl font-Yek-Bold hover:ring-[6px] transition-all duration-300">
                ویرایش اطلاعات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditInfo
