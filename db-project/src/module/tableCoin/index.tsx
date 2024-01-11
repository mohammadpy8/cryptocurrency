import { FC, useState } from 'react'
import crypto from '../../types/cryptoType/CryptoType'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import { FiBarChart2 } from 'react-icons/fi'
import { marketChart } from '../../services/cryptoApi'
import { ThreeDots } from 'react-loader-spinner'
import { IoMdResize } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import Pagination from '../pagination'

interface ChartType {
  prices: [number, number][]
  market_caps: [number, number][]
  total_volumes: [number, number][]
}

interface table {
  isLoading?: boolean
  currency: string
  coins: crypto[]
  setChart: any
  setOpenCharts: any
  show: any
  page: number
  setPage: any
  numberPage: number
}

const TableCoin: FC<table> = ({
  isLoading,
  coins,
  currency,
  setChart,
  setOpenCharts,
  show,
  page,
  setPage,
  numberPage
}) => {
  const [fullSize, setFullSize] = useState<boolean>(false)

  const changeCurrency = (price: string) => {
    switch (price) {
      case 'usd':
        return '$'
      case 'eur':
        return '€'
      case 'jpy':
        return '¥'
      default:
        return null
    }
  }

  const fullSizeHandler = () => setFullSize(!fullSize);

  const randomPhoto = (priceCoin: number) => {
    if (priceCoin > 0 && priceCoin < 3) {
      return 'https://kifpool.me/ui_v2/charts/green/green-1.svg'
    } else if (priceCoin >= 3 && priceCoin < 5) {
      return 'https://kifpool.me/ui_v2/charts/green/green-10.svg'
    } else if (priceCoin >= 5) {
      return 'https://kifpool.me/ui_v2/charts/green/green-9.svg'
    } else if (priceCoin <= -1 && priceCoin >= -3) {
      return 'https://kifpool.me/ui_v2/charts/red/red-3.svg'
    } else if (priceCoin <= -4) {
      return 'https://kifpool.me/ui_v2/charts/red/red-4.svg'
    } else if (priceCoin < 0) {
      return 'https://kifpool.me/ui_v2/charts/red/red-2.svg'
    }
  }

  const reverseNumber = (number: any): any => {
    const negative = number.slice(0, 1)
    const splited = number.split('-')

    const joined = splited[1].concat(negative)
    return joined
  }

  const colorRandom = (index: number) => {
    if (index % 2 === 0) {
      return '#fff'
    } else {
      return '#f0f3ff'
    }
  }

  return (
    <div
      className={
        fullSize
          ? 'full-size-modal'
          : 'mt-8 mb-8 rounded-2xl relative z-[1] border-[1px] border-[#f0f3ff]'
      }
    >
      {coins.length > 0 && !isLoading ? (
        <table
          className={
            fullSize
              ? 'z-[999] w-full rounded-xl m-auto border-collapse border-spacing-0 overflow-hidden font-Yek-SemiBold'
              : 'w-full rounded-xl m-auto border-collapse border-spacing-0 overflow-hidden font-Yek-SemiBold z-[10000]'
          }
        >
          <thead className="rounded-2xl h-16 bg-[#f0f3ff] font-Yek-Bold text-gray-700">
            <tr className="TH">
              <th>
                {show ? (
                  fullSize ? (
                    <button
                      onClick={fullSizeHandler}
                      className="border-2 p-2 bg-gray-300 rounded-lg"
                    >
                      <IoClose size={30} />
                    </button>
                  ) : (
                    <button
                      onClick={fullSizeHandler}
                      className="border-2 p-2 bg-gray-300 rounded-lg"
                    >
                      <IoMdResize size={25} />
                    </button>
                  )
                ) : null}
              </th>
              <th>ارز</th>
              <th>قیمت(دلار)</th>
              <th>تغییرات</th>
              <th>قیمت اصلی(دلار)</th>
              <th>نمودار</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.slice(0, numberPage).map((coin, index) => (
              <tr
                className="TD hover:scale-105  transition-all duration-500"
                style={{
                  background: colorRandom(index),
                }}
              >
                <td className="bg-[#f0f3ff] TD-first">
                  <div className="flex flex-col items-center gap-y-2">
                    <img src={coin.image} alt={coin.id} className="w-8 h-8" />
                    <span className="text-[15px] font-Yek-Bold">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td>{coin.name}</td>
                <td>
                  {changeCurrency(currency)}
                  {numberConvertToPersian(coin.current_price.toLocaleString())}
                </td>
                <td
                  className={
                    coin.price_change_percentage_24h > 0
                      ? 'text-green-500'
                      : 'text-red-600'
                  }
                >
                  %
                  {coin.price_change_percentage_24h < 0
                    ? numberConvertToPersian(
                        reverseNumber(
                          coin.price_change_percentage_24h.toFixed(2),
                        ),
                      )
                    : numberConvertToPersian(
                        coin.price_change_percentage_24h.toFixed(2),
                      )}
                </td>
                <td>
                  ${numberConvertToPersian(coin.total_volume.toLocaleString())}
                </td>
                <td>
                  <img
                    src={randomPhoto(coin.price_change_percentage_24h)}
                    alt={coin.name}
                    className="w-28"
                  />
                </td>
                <td>
                  <button
                    className="border-2 p-2 rounded-lg"
                    onClick={async () => {
                      setOpenCharts(true)
                      try {
                        const res = await fetch(marketChart(coin.id))
                        const json = (await res.json()) as number[][]
                        setChart({ ...json, coin })
                      } catch (error) {
                        setChart(null)
                      }
                    }}
                  >
                    <FiBarChart2 size={30} color="#3051f8" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      <div className="w-full">
        {fullSize && <Pagination page={page} setPage={setPage} />}
      </div>
    </div>
  )
}

export default TableCoin
