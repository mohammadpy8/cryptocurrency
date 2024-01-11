import { FC, useContext, useEffect, useState } from 'react'
import { MdVerifiedUser } from 'react-icons/md'
import DatePickers from '../../../module/datePicker'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import { Outlet } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { CartContext } from '../../../context/CartProviderContext'
import useSaveInfoLocalStorage from '../../../hooks/useSaveInfoLocalStorage'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../context/AuthContextProvider'
import { Toaster } from 'react-hot-toast'

interface UserInfos {
  username?: string
  password?: string
  is_staff?: string
  full_name?: string
}

const AdminLayoutPanel: FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfos>({
    username: '',
    password: '',
    is_staff: '',
    full_name: '',
  })
  const getToken = useLocalStorage('', 'GET')
  console.log(getToken)

  const CartTotal = useContext(CartContext)
  const AuthDash = useContext(AuthContext)

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
    <div className="bg-white h-full flex justify-between">
      <div className="w-[290px] h-screen bg-white fixed top-0">
        <div className="flex items-center gap-x-2 pt-6 pr-8">
          <MdVerifiedUser size={35} color="#0e33ea" />
          <h1 className="text-2xl font-Yek-ExtraBlack">بک پنل ادمین</h1>
        </div>
        <div className="p-8">
          <ul className="text-md font-Yek-Regular space-y-8 text-gray-600">
            <li className="side-bar">
              <NavLink
                to="/admin-dashboard/dashboard"
                className="flex items-center gap-x-2 p-2"
                end
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 22"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M20.04 9.719a.75.75 0 0 0-1.5 0h1.5Zm-14.58 0a.75.75 0 1 0-1.5 0h1.5Zm9.053 10.988-.172-.73.172.73Zm-5.026 0 .172-.73-.172.73Zm5.341-15.693-.532.529.532-.529Zm5.64 6.744a.75.75 0 1 0 1.064-1.057l-1.064 1.057ZM9.172 5.014l.532.529-.532-.529Zm-6.704 5.687a.75.75 0 1 0 1.064 1.057l-1.064-1.057Zm7.25 7.62-.737-.14.737.14Zm.02-.104.737.139-.737-.139Zm4.524 0-.737.139.737-.139Zm.02.103.737-.138-.737.138Zm-.29 2.232-.677-.322.677.322Zm-.794-.077a.75.75 0 0 0 1.354.645l-1.354-.645Zm-3.19.077-.677.322.677-.322Zm-.56.568a.75.75 0 0 0 1.354-.645l-1.354.645Zm1.913-4.677-.2-.723.2.723Zm1.278 0 .2-.723-.2.723Zm5.901-6.724v4.918h1.5V9.72h-1.5ZM5.46 14.637V9.72h-1.5v4.918h1.5Zm8.88 5.34a10.18 10.18 0 0 1-4.68 0l-.346 1.46a11.68 11.68 0 0 0 5.372 0l-.345-1.46Zm-4.68 0c-2.457-.58-4.2-2.79-4.2-5.34h-1.5c0 3.24 2.214 6.058 5.354 6.8l.345-1.46Zm5.026 1.46c3.14-.742 5.354-3.56 5.354-6.8h-1.5c0 2.55-1.743 4.76-4.2 5.34l.346 1.46Zm-.39-15.894 6.172 6.215 1.064-1.057-6.171-6.215-1.065 1.057ZM8.64 4.486 2.468 10.7l1.064 1.057 6.172-6.215-1.065-1.057Zm6.722 0c-.652-.657-1.193-1.204-1.68-1.577-.502-.387-1.035-.659-1.681-.659v1.5c.183 0 .397.064.768.348.387.298.847.758 1.528 1.445l1.065-1.057ZM9.704 5.543c.681-.687 1.14-1.147 1.528-1.445.37-.284.585-.348.768-.348v-1.5c-.646 0-1.178.272-1.682.659-.486.373-1.027.92-1.679 1.577l1.065 1.057Zm.752 12.916.019-.103L9 18.079l-.02.103 1.475.277Zm3.07-.103.018.103 1.475-.277-.02-.103-1.474.277Zm-.211 1.874-.117.245 1.354.645.117-.246-1.354-.644Zm-3.984.644.117.246 1.354-.645-.117-.245-1.354.644Zm4.213-2.415c.113.6.032 1.22-.23 1.77l1.355.645c.399-.837.52-1.78.35-2.692l-1.475.277Zm-4.563-.277a4.385 4.385 0 0 0 .35 2.692l1.354-.644a2.884 2.884 0 0 1-.23-1.771l-1.474-.277Zm2.58-1.017c.287-.08.59-.08.877 0l.401-1.445a3.138 3.138 0 0 0-1.678 0l.4 1.445ZM15 18.08a3.024 3.024 0 0 0-2.16-2.36l-.4 1.446c.554.154.978.614 1.086 1.19L15 18.08Zm-4.524.277a1.524 1.524 0 0 1 1.087-1.19l-.401-1.446A3.024 3.024 0 0 0 9 18.079l1.474.277Z"
                  ></path>
                </svg>
                <h1>داشبورد</h1>
              </NavLink>
            </li>
            <li className="side-bar">
              <NavLink
                to="/admin-dashboard/list-arz"
                className="flex items-center gap-x-2 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M3.862 10.703a10.891 10.891 0 0 0-.006 5.548 6.03 6.03 0 0 0 4.597 4.368l.155.032a16.66 16.66 0 0 0 6.784 0l.155-.032a6.03 6.03 0 0 0 4.597-4.368 10.89 10.89 0 0 0-.006-5.548c-.577-2.179-2.337-3.875-4.535-4.331a17.698 17.698 0 0 0-7.206 0m-4.535 4.331C4.44 8.524 6.2 6.828 8.397 6.372m-4.535 4.331c-.198.75-.315 1.52-.35 2.292V7.252a4.235 4.235 0 0 1 3.1-4.061A5.26 5.26 0 0 1 8.01 3h.858c1.68 0 3.654 1.311 4.378 3.045-1.206 0-3.662.08-4.85.327m6.214 2.397.043.007a3.71 3.71 0 0 1 3.09 3.664M3.51 13.996v.018l.001.002v-.02Z"
                  ></path>
                </svg>
                <h1>لیست محصولات ارزی</h1>
              </NavLink>
            </li>
            <li className="side-bar">
              <NavLink
                to="/admin-dashboard/list-master-cart"
                className="flex items-center gap-x-2 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M8 9h4"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m2.885 15.151.728-.18-.728.18Zm0-6.302.728.18-.728-.18Zm18.23 0 .728-.181-.728.18Zm0 6.302-.728-.18.728.18Zm-6 5.508-.162-.732.163.732Zm-6.23 0 .162-.732-.163.732Zm0-17.318.162.732-.163-.732Zm6.23 0 .163-.732-.162.732ZM8.432 20.558l-.163.733.163-.733Zm7.138 0 .163.733-.163-.733Zm0-17.116-.162.732.162-.732Zm-7.138 0-.163-.733.163.733Zm10.262 11.062-.134.738.134-.738Zm-.058-.011.134-.738-.134.738Zm0-4.986.134.738-.134-.738Zm.058-.01-.134-.738.134.737Zm2.307.99a.75.75 0 0 0 .601-1.374L21 10.487Zm.601 4.4A.75.75 0 1 0 21 13.513l.601 1.374Zm-5.023-2.259-.721.206.721-.206Zm0-1.256.721.206-.72-.206ZM8.593 4.174l.454-.1-.325-1.465-.454.1.325 1.465Zm6.36-.1.454.1.325-1.465-.454-.1-.325 1.464Zm.454 15.752-.454.1.325 1.465.454-.1-.325-1.465Zm-6.36.1-.454-.1-.325 1.465.454.1.325-1.464Zm-5.434-4.955a12.326 12.326 0 0 1 0-5.942l-1.455-.361a13.826 13.826 0 0 0 0 6.664l1.455-.362ZM20.387 9.03c.484 1.95.484 3.99 0 5.94l1.456.362a13.827 13.827 0 0 0 0-6.664l-1.456.362Zm-5.434 10.897a13.65 13.65 0 0 1-5.906 0l-.325 1.464c2.16.479 4.397.479 6.556 0l-.325-1.464ZM9.047 4.073a13.651 13.651 0 0 1 5.906 0l.325-1.464a15.151 15.151 0 0 0-6.556 0l.325 1.464Zm-.454 15.753a6.603 6.603 0 0 1-4.98-4.856l-1.455.362a8.103 8.103 0 0 0 6.11 5.959l.325-1.465Zm7.139 1.465a8.103 8.103 0 0 0 6.11-5.959l-1.455-.362a6.603 6.603 0 0 1-4.98 4.856l.325 1.465Zm-.325-17.117a6.603 6.603 0 0 1 4.98 4.856l1.456-.362a8.103 8.103 0 0 0-6.111-5.959l-.325 1.465ZM8.268 2.709a8.103 8.103 0 0 0-6.11 5.959l1.455.361a6.603 6.603 0 0 1 4.98-4.855l-.325-1.465Zm10.56 11.057-.059-.01-.269 1.475.059.01.269-1.475Zm-.059-3.521.059-.01-.27-1.476-.058.01.27 1.476Zm.059-.01a3.743 3.743 0 0 1 2.172.252l.601-1.374a5.244 5.244 0 0 0-3.042-.354l.269 1.475Zm-.27 5.007a5.244 5.244 0 0 0 3.043-.355L21 13.513a3.743 3.743 0 0 1-2.172.253l-.27 1.476Zm-1.259-2.82a1.538 1.538 0 0 1 0-.844l-1.442-.412a3.038 3.038 0 0 0 0 1.668l1.442-.412ZM18.5 8.77a3.38 3.38 0 0 0-2.643 2.397l1.442.412a1.88 1.88 0 0 1 1.47-1.333L18.5 8.769Zm.27 4.986a1.88 1.88 0 0 1-1.47-1.333l-1.443.412a3.38 3.38 0 0 0 2.643 2.397l.27-1.476Z"
                  ></path>
                </svg>
                <h1>لیست مسترکارت ها</h1>
              </NavLink>
            </li>
            <li className="side-bar">
              <NavLink
                to="/admin-dashboard/list-comments"
                className="flex items-center gap-x-2 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <h1>لیست کامنت ها</h1>
              </NavLink>
            </li>
            <li className="side-bar">
              <NavLink
                to="/admin-dashboard/list-users"
                className="flex items-center gap-x-2 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <h1>لیست کاربرها</h1>
              </NavLink>
            </li>
            <li className="flex items-center gap-x-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <h1>لیست خرید و فروش</h1>
            </li>
            <li className="flex items-center gap-x-2 p-2 hover:text-red-500 transition-all duration-300 cursor-pointer">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <h1 className="">خروج</h1>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 mt-2 flex justify-between items-center">
          <div className="flex gap-x-2">
            <div className="bg-gray-300 text-center flex items-center px-3 h-9 rounded-full">
              <h1 className="text-md font-Yek-ExtraBold">
                {userInfo.full_name?.slice(0, 1)}
              </h1>
            </div>
            <div className="space-y-1">
              <h1 className="text-md font-Yek-ExtraBlack text-gray-600">
                {userInfo.full_name}
              </h1>
              <p className="text-sm font-Yek-SemiBold text-gray-500 text-center">
                {userInfo.is_staff === 'True' && 'ادمین'}
              </p>
            </div>
          </div>
          <div>
            <button className="border-2 p-2 rounded-2xl">
              <Link to="/admin-dashboard/edit-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.875"
                    d="M7.779 11.38h3.72"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.875"
                    d="M9.367 2.834v0a1.774 1.774 0 0 0-2.484.354L2.945 8.436c-1.015 1.352-.055 3.027-.055 3.027s1.892.435 2.892-.898L9.72 5.318a1.774 1.774 0 0 0-.354-2.484Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.875"
                    d="m6.127 4.207 2.838 2.13"
                  ></path>
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mr-[290px]">
        <div className="bg-white h-20 sticky top-0 z-10">
          <div className="flex justify-between p-6">
            <div className="flex gap-x-2 text-xl font-Yek-Bold text-gray-700">
              <h1>سلام;</h1>
              <h1 className="border-l-2 pl-2">{userInfo.full_name}</h1>
              <DatePickers />
            </div>
            <div className="flex items-center gap-x-4">
              <Link to="/cart">
                {' '}
                <div className="relative border-2 p-1 rounded-[15px]">
                  <span className="bg-red-600 absolute -top-1 -right-2 w-4 h-4 text-white rounded-full flex items-center justify-center font-Yek-ExtraBold">
                    {numberConvertToPersian(CartTotal?.state.itemsCounter)}
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6 text-gray-600"
                    >
                      <path
                        fill="currentColor"
                        d="m3.19 15.437.851-.207-.85.207Zm0-6.182-.85-.208.85.208Zm17.445 0 .85-.208-.85.208Zm0 6.182.85.208-.85-.208Zm-5.76 5.348-.192-.854.192.854Zm-5.924 0-.193.854.193-.854Zm0-16.878.192.854-.192-.854Zm5.924 0 .192-.854-.192.854Zm-6.446 16.76.192-.853-.192.854Zm6.968 0 .192.854-.192-.854Zm0-16.642-.193.853.193-.853Zm-6.968 0-.193-.854.193.854Zm-4.254 1.61-.86.158.86-.158ZM3.47 6.65a.875.875 0 0 0 1.721-.315L3.47 6.65ZM1.327 1.727a.875.875 0 1 0-.308 1.723l.308-1.723Zm6.462 19.334c.087.188.121.4.096.608l1.738.208a2.878 2.878 0 0 0-.247-1.554l-1.587.738Zm.096.608c-.025.21-.107.404-.234.562l1.364 1.096c.334-.416.544-.92.608-1.45l-1.738-.208Zm-.234.562a1.019 1.019 0 0 1-.474.331l.549 1.662c.507-.168.954-.48 1.289-.896L7.65 22.23Zm-.474.331a.968.968 0 0 1-.56.015l-.46 1.688c.516.14 1.06.127 1.569-.041l-.549-1.662Zm-.56.015a1.011 1.011 0 0 1-.487-.305l-1.306 1.165c.356.399.818.688 1.333.828l.46-1.688Zm-.487-.305a1.1 1.1 0 0 1-.261-.547l-1.725.294c.09.527.324 1.02.68 1.418l1.306-1.165Zm-.261-.547a1.13 1.13 0 0 1 .066-.613l-1.622-.658a2.88 2.88 0 0 0-.17 1.565l1.726-.294Zm.066-.613c.078-.193.206-.354.366-.469L5.284 19.22c-.434.31-.77.74-.971 1.235l1.622.658Zm11.487-.302c.15.131.263.307.322.508l1.68-.494a2.833 2.833 0 0 0-.848-1.33l-1.154 1.316Zm.322.508c.06.202.062.417.006.62l1.687.464a2.882 2.882 0 0 0-.014-1.578l-1.678.494Zm.006.62a1.09 1.09 0 0 1-.314.515l1.178 1.294c.396-.36.68-.828.823-1.345l-1.687-.465Zm-.314.515a.997.997 0 0 1-.514.249l.274 1.728a2.748 2.748 0 0 0 1.418-.683l-1.178-1.294Zm-.514.249a.971.971 0 0 1-.557-.077l-.727 1.592a2.72 2.72 0 0 0 1.558.213l-.274-1.728Zm-.557-.077a1.036 1.036 0 0 1-.44-.386l-1.475.943c.289.452.7.812 1.188 1.035l.727-1.592Zm-.44-.386a1.117 1.117 0 0 1-.175-.589l-1.75.02c.006.536.161 1.06.45 1.512l1.474-.943Zm-.175-.589a1.12 1.12 0 0 1 .161-.593l-1.495-.91A2.87 2.87 0 0 0 14 21.67l1.75-.02ZM8.62 4.878l.522-.117-.385-1.708-.522.118.385 1.707Zm6.062-.117.521.117.385-1.707-.522-.118-.384 1.708Zm.521 15.053-.521.117.384 1.708.522-.118-.385-1.707Zm-6.061.117-.522-.117-.385 1.707.522.118.385-1.707ZM4.041 15.23a12.172 12.172 0 0 1 0-5.768l-1.7-.415a13.922 13.922 0 0 0 0 6.598l1.7-.415Zm15.744-5.768a12.171 12.171 0 0 1 0 5.768l1.7.415a13.923 13.923 0 0 0 0-6.598l-1.7.415Zm-5.102 10.47a12.586 12.586 0 0 1-5.54 0l-.385 1.707c2.079.468 4.231.468 6.31 0l-.385-1.707ZM9.143 4.76a12.587 12.587 0 0 1 5.54 0l.384-1.708a14.337 14.337 0 0 0-6.309 0l.385 1.708Zm-.522 15.053c-2.233-.504-4.015-2.27-4.58-4.584l-1.7.415c.717 2.937 2.992 5.222 5.895 5.876l.385-1.707Zm6.968 1.707c2.903-.654 5.179-2.939 5.896-5.876l-1.7-.415c-.565 2.313-2.347 4.08-4.58 4.584l.384 1.707Zm-.385-16.643c2.234.504 4.016 2.27 4.58 4.584l1.7-.415c-.716-2.937-2.992-5.221-5.895-5.876l-.385 1.707ZM8.236 3.171c-2.903.655-5.178 2.939-5.895 5.876l1.7.415c.565-2.313 2.347-4.08 4.58-4.584l-.385-1.707ZM3.7 17.124h16.426v-1.75H3.7v1.75ZM3.314 5.793l.157.856 1.721-.315-.156-.856-1.722.315ZM1.02 3.45c1.147.205 2.073 1.128 2.295 2.343l1.722-.315c-.35-1.907-1.817-3.413-3.71-3.75L1.02 3.45Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="1.75"
                        d="m13.423 7.256.047.006c1.993.285 3.453 1.762 3.453 3.494"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
              <div className="border-2 p-1 rounded-[15px] flex items-center">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      fill="currentColor"
                      d="M20.04 9.719a.75.75 0 0 0-1.5 0h1.5Zm-14.58 0a.75.75 0 1 0-1.5 0h1.5Zm9.053 10.988-.172-.73.172.73Zm-5.026 0 .172-.73-.172.73Zm5.341-15.693-.532.529.532-.529Zm5.64 6.744a.75.75 0 1 0 1.064-1.057l-1.064 1.057ZM9.172 5.014l.532.529-.532-.529Zm-6.704 5.687a.75.75 0 1 0 1.064 1.057l-1.064-1.057Zm7.25 7.62-.737-.14.737.14Zm.02-.104.737.139-.737-.139Zm4.524 0-.737.139.737-.139Zm.02.103.737-.138-.737.138Zm-.29 2.232-.677-.322.677.322Zm-.794-.077a.75.75 0 0 0 1.354.645l-1.354-.645Zm-3.19.077-.677.322.677-.322Zm-.56.568a.75.75 0 0 0 1.354-.645l-1.354.645Zm1.913-4.677-.2-.723.2.723Zm1.278 0 .2-.723-.2.723Zm5.901-6.724v4.918h1.5V9.72h-1.5ZM5.46 14.637V9.72h-1.5v4.918h1.5Zm8.88 5.34a10.18 10.18 0 0 1-4.68 0l-.346 1.46a11.68 11.68 0 0 0 5.372 0l-.345-1.46Zm-4.68 0c-2.457-.58-4.2-2.79-4.2-5.34h-1.5c0 3.24 2.214 6.058 5.354 6.8l.345-1.46Zm5.026 1.46c3.14-.742 5.354-3.56 5.354-6.8h-1.5c0 2.55-1.743 4.76-4.2 5.34l.346 1.46Zm-.39-15.894 6.172 6.215 1.064-1.057-6.171-6.215-1.065 1.057ZM8.64 4.486 2.468 10.7l1.064 1.057 6.172-6.215-1.065-1.057Zm6.722 0c-.652-.657-1.193-1.204-1.68-1.577-.502-.387-1.035-.659-1.681-.659v1.5c.183 0 .397.064.768.348.387.298.847.758 1.528 1.445l1.065-1.057ZM9.704 5.543c.681-.687 1.14-1.147 1.528-1.445.37-.284.585-.348.768-.348v-1.5c-.646 0-1.178.272-1.682.659-.486.373-1.027.92-1.679 1.577l1.065 1.057Zm.752 12.916.019-.103L9 18.079l-.02.103 1.475.277Zm3.07-.103.018.103 1.475-.277-.02-.103-1.474.277Zm-.211 1.874-.117.245 1.354.645.117-.246-1.354-.644Zm-3.984.644.117.246 1.354-.645-.117-.245-1.354.644Zm4.213-2.415c.113.6.032 1.22-.23 1.77l1.355.645c.399-.837.52-1.78.35-2.692l-1.475.277Zm-4.563-.277a4.385 4.385 0 0 0 .35 2.692l1.354-.644a2.884 2.884 0 0 1-.23-1.771l-1.474-.277Zm2.58-1.017c.287-.08.59-.08.877 0l.401-1.445a3.138 3.138 0 0 0-1.678 0l.4 1.445ZM15 18.08a3.024 3.024 0 0 0-2.16-2.36l-.4 1.446c.554.154.978.614 1.086 1.19L15 18.08Zm-4.524.277a1.524 1.524 0 0 1 1.087-1.19l-.401-1.446A3.024 3.024 0 0 0 9 18.079l1.474.277Z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <div className="bg-gray-100 h-full w-[1260px] mainContent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayoutPanel
