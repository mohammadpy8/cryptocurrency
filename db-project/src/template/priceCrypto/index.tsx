import { FC, useState } from 'react'
import { FiBarChart2 } from 'react-icons/fi'
import ShowCoin from '../showCoin'
import { TbClipboardList } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const PriceCrypto: FC = () => {
  const [currency, setCurrency] = useState<string>('usd')
  return (
    <div className="mt-72 mb-24">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-2">
          <div>
            <FiBarChart2 size={30} color="#3051f8" />
          </div>
          <div>
            <h1 className="text-xl font-Yek-SemiBold pt-2">
              قیمت لحظه ای ارزدیجیتال
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-x-8 bg-gray-200 px-4 py-2 rounded-lg">
          <div className="font-Yek-SemiBold">
            <h1>قیمت براساس:</h1>
          </div>
          <div className="flex items-center font-Yek-SemiBold gap-x-8 text-primary-100">
            <button
              className={
                currency === 'usd'
                  ? 'bg-white w-24 h-12 rounded-lg shadow-lg transition-all duration-500'
                  : ' transition-all duration-500'
              }
              onClick={() => setCurrency('usd')}
            >
              دلار
            </button>
            <button
              className={
                currency === 'eur'
                  ? 'bg-white w-24 h-12 rounded-lg shadow-lg transition-all duration-500'
                  : ' transition-all duration-500'
              }
              onClick={() => setCurrency('eur')}
            >
              یورو
            </button>
            <button
              className={
                currency === 'jpy'
                  ? 'bg-white w-24 h-12 rounded-lg shadow-lg transition-all duration-500'
                  : ' transition-all duration-500'
              }
              onClick={() => setCurrency('jpy')}
            >
              ین ژاپن
            </button>
          </div>
        </div>
      </div>
      <div>
        <ShowCoin currency={currency} numberPage={10} />
      </div>
      <div className="flex justify-center">
        <button className="flex items-center gap-x-2 font-Yek-SemiBold text-primary-200 border-2 p-2 rounded-lg hover:opacity-70 transition-all duration-300">
          <TbClipboardList color="#193df3" size={30} />
          <Link to="/all-arz">
            <span>لیست تمام ارزها</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PriceCrypto;
