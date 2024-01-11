import { FC, useState } from 'react'

import { FaTimes } from 'react-icons/fa'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
  Legend,
} from 'recharts'
import convertData from '../../shared/convertData'
import { ThreeDots } from 'react-loader-spinner'

interface ChartTypes {
  prices: number[][]
  market_caps: number[][]
  total_volumes: number[][]
}

interface Chart {
  setChart: any
  chart: number[][]
  setOpenChart: any
  openCharts: any
}

const Chart: FC<Chart> = ({ setChart, chart, setOpenChart, openCharts }) => {
  const [type, setType] = useState<any>('prices')
  console.log(chart)

  console.log(convertData(chart, type))

  return (
    <div className="z-[150000000000]">
      <div className={openCharts ? `ModalFrist open` : `ModalFrist close`}>
        <div className="modal-background"></div>
        {chart ? (
          <div className="modal">
            <div className="flex justify-end mt-4 ml-[-20px]">
              <button onClick={() => setOpenChart(false)}>
                <FaTimes size={25} />
              </button>
            </div>
            <div className='flex items-center gap-x-4 text-xl font-Yek-Bold'>
              <img src={chart.coin?.image} alt="image" className='w-12'/>
              <p>{chart.coin?.name}</p>
            </div>
            <div className="w-[760px] h-[300px] mt-6 px-auto">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={400}
                  height={400}
                  data={convertData(chart, type).slice(0, 30)}
                  margin={{
                    top: 5,
                    left:-25
                  }}
                >
                  <Line
                    type="monotone"
                    dataKey={type}
                    stroke="#193df3"
                    strokeWidth="4px"
                    activeDot={{ r: 9 }}
                    
                  />
                  <CartesianGrid stroke="#fff" strokeDasharray="1 1" />
                  <YAxis
                    dataKey={type}
                    domain={['auto', 'auto']}
                    stroke="#eee"
                     
                  />
                  <XAxis dataKey="date" hide />
                  <Legend />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex mt-5 gap-x-6 text-lg font-Yek-Bold items-center">
              <div>
                <h1>نمایش نمودار براساس :</h1>
              </div>
              <div>
                <button
                  onClick={() => setType('prices')}
                  className={
                    type === 'prices'
                      ? 'bg-primary-200 w-24 h-12 rounded-xl transition-all duration-300 border-none'
                      : 'border-2 w-24 h-12 rounded-xl border-white text-white transition-colors duration-500'
                  }
                >
                  قیمت
                </button>
              </div>
              <div>
                <button
                  onClick={() => setType('market_caps')}
                  className={
                    type === 'market_caps'
                      ? 'bg-primary-200 w-24 h-12 rounded-xl transition-all duration-300 border-none'
                      : 'border-2 w-24 h-12 rounded-xl border-white text-white transition-colors duration-500'
                  }
                >
                  مارکت کپ
                </button>
              </div>
              <div>
                <button
                  onClick={() => setType('total_volumes')}
                  className={
                    type === 'total_volumes'
                      ? 'bg-primary-200 w-24 h-12 rounded-xl transition-all duration-300 border-none'
                      : 'border-2 w-24 h-12 rounded-xl border-white text-white transition-colors duration-500'
                  }
                >
                  ارزش کلی
                </button>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  )
}

export default Chart
