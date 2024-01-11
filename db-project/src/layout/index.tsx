import React, { useState } from 'react'
import Header from '../template/header'
import Footer from '../template/footer'
import { FaTimes } from 'react-icons/fa'
import { IoChatbox } from 'react-icons/io5'
import { Outlet } from 'react-router-dom'

const index = ({ userInfo }: any) => {
  console.log('userInfo', userInfo)

  const [openChat, setOpenChat] = useState<boolean>(false)
  return (
    <div className="relative">
      <div className="fixed bottom-8 right-4 z-[1000]">
        <button
          className="bg-primary-300 w-16 h-16 flex items-center justify-center rounded-full"
          onClick={() => setOpenChat(!openChat)}
        >
          {openChat ? (
            <FaTimes size={35} color="#fff" />
          ) : (
            <IoChatbox color="#fff" size={35} />
          )}
        </button>
      </div>
      <div
        className={
          openChat
            ? 'opacity-100 transition-all duration-500 w-72 h-96 bg-white shadow-2xl fixed bottom-[120px] right-9 z-[1000] rounded-lg'
            : 'transition-all duration-500 w-72 h-96 bg-white shadow-2xl fixed bottom-[120px] right-9 z-[1000] rounded-lg chat'
        }
      >
        <div className="bg-primary-300 h-24 rounded-t-lg">
          <div>
            <h1 className="text-xl font-Yek-Bold text-white pt-2 pr-2">
              پشتیبانی ایرانیان
            </h1>
          </div>
          <div className="text-center">
            <span className="text-sm mx-4 text-gray-200 font-Yek-Regular">
              سوالات خود را می توانید بپرسید و افراد ما در کوتاه ترین زمان ممکن
              پاسخ خواهند داد
            </span>
          </div>
        </div>
      </div>
      <Header userInfo={userInfo} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default index
