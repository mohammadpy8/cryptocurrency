import { FC, useContext, useEffect, useState } from 'react'
import ScrollIndicator from '../../module/scrollIndicator'
import SliderHeader from '../sliderHeader'
import { Link } from 'react-router-dom'
import useSaveInfoLocalStorage from '../../hooks/useSaveInfoLocalStorage'
import { AuthContext } from '../../context/AuthContextProvider'
import useLocalStorage from '../../hooks/useLocalStorage'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const Header = () => {
  const userInfo = useSaveInfoLocalStorage('', 'GET')
  const contextUser = useContext(AuthContext)
  console.log(contextUser)

  const getToken = useLocalStorage('', 'GET')

  const [scrollCount, setScrollCount] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 104
      setScrollCount(isScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [window.scrollY])

  console.log(window.scrollY)

  return (
    <>
      <SliderHeader />
      <div
        className={
          scrollCount
            ? 'w-full bg-gray-100 z-50 sticky top-0 transition-all duration-500'
            : 'w-full bg-gray-100 z-50 sticky transition-all duration-500'
        }
      >
        <div className="container w-full border-b-[1px] border-gray-200 h-20 flex justify-between items-center">
          <div className="text-3xl font-Yek-ExtraBlack text-primary-400">
            <Link to="/">
              <h1>ارز دیجیتال ایرانیان</h1>
            </Link>
          </div>
          <div>
            <ul className="flex gap-x-12 font-Yek-Bold text-gray-500 justify-center items-center">
              <li>
                <Link to="/arz-shop">خرید ارز دیجیتال</Link>
              </li>
              <Link to="/all-arz">
                <li>قیمت ارز های دیجیتال</li>
              </Link>
              <Link to="/master-shop">
                <li>خرید مسترکارت</li>
              </Link>
              <Link to="/cart"><li>سبد خرید</li></Link>
              <li>وبلاگ</li>
            </ul>
          </div>
          <div className="flex">
            {contextUser?.isAuthenticated === true ? (
              <div className="flex gap-x-4">
                <Link
                  to={
                    userInfo.is_staff === 'False'
                      ? '/users-dashboard/dashboard'
                      : '/admin-dashboard/dashboard'
                  }
                >
                  <button className="text-white text-lg bg-primary-300 font-Yek-SemiBold p-3 rounded-xl hover:ring-[6px] duration-300 transition-all">
                    رفتن به پنل کاربری
                  </button>
                </Link>
                <button
                  className="text-white bg-red-600 p-3 rounded-xl text-lg font-Yek-SemiBold hover:ring-[6px] duration-300 transition-all ring-red-300"
                  onClick={() => {
                    contextUser.dispatch({ type: 'logout', payload: null })
                    useLocalStorage('', 'REMOVE')
                    useSaveInfoLocalStorage('', 'REMOVE')
                    toast.success('با موفقیت خارج شدید')
                  }}
                >
                  خروج
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="text-white text-lg bg-primary-300 font-Yek-SemiBold p-3 rounded-xl hover:ring-[6px] duration-300 transition-all">
                  ورود / ثبت نام
                </button>
              </Link>
            )}
          </div>
        </div>
        <ScrollIndicator />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  )
}

export default Header
