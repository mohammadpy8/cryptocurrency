import React, { FC, useState, useEffect } from 'react'
import { getCoinList } from '../../services/cryptoApi'
import crypto from '../../types/cryptoType/CryptoType'
import TableCoin from '../../module/tableCoin'
import Chart from '../../module/chart'
import Pagination from '../../module/pagination'

const ShowCoin = ({currency, show, numberPage} : any) => {
  const [coins, setCoins] = useState<crypto[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)
  // const [currency, setCurrency] = useState<string>('usd')
  const [chart, setChart] = useState<number[][]>([])
  const [openCharts, setOpenCharts] = useState<boolean>(false)


  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency))
        const json = (await res.json()) as crypto[]
        setCoins(json)
        setIsLoading(false)
      } catch (error) {
        // console.log(error)
        setIsLoading(false)
        setCoins([])
      }
    }

    getData()
    // window.scrollTo(0, 0)
  }, [page, currency])

  return (
    <div>
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
        setOpenCharts={setOpenCharts}
        show={show}
        page={page}
        setPage={setPage}
        numberPage={numberPage}
      />
      {!!chart && <Chart setChart={setChart} chart={chart} setOpenChart={setOpenCharts} openCharts={openCharts} />}
      {show && !isLoading && <Pagination page={page} setPage={setPage} /> }
      
    </div>
  )
}

export default ShowCoin
