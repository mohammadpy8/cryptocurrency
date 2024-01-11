import { FC } from 'react'

const Popular: FC = () => {
  return (
    <div className="my-20 flex gap-x-4 items-center">
      <div className="text-gray-700 text-xl font-Yek-Bold">
        <h1>پرطرفدارها:</h1>
      </div>
      <div className="flex gap-x-4">
        <div className="text-md font-Yek-Regular bg-gray-200 px-3 py-2 rounded-lg">
          <button># خرید ترون</button>
        </div>
        <div className="text-md font-Yek-Regular bg-gray-200 px-3 py-2 rounded-lg">
          <button># خرید تتر </button>
        </div>
        <div className="text-md font-Yek-Regular bg-gray-200 px-3 py-2 rounded-lg">
          <button># وایت پیپر چیست؟</button>
        </div>
        <div className="text-md font-Yek-Regular bg-gray-200 px-3 py-2 rounded-lg">
          <button># خرید اتریوم</button>
        </div>
        <div className="text-md font-Yek-Regular bg-gray-200 px-3 py-2 rounded-lg">
          <button># خرید کاردانو</button>
        </div>
        <div className="text-md font-Yek-Regular bg-gray-200 px-3 py-2 rounded-lg">
          <button># خرید پپیه</button>
        </div>
      </div>
    </div>
  )
}

export default Popular
