import { FC } from 'react'
import MainText from '../../module/mainText'
import ChangeCrypto from '../../module/changeCrypto'

const Main: FC = () => {
  return (
    <div className='flex pt-1'>
      <MainText />
      <ChangeCrypto />
    </div>
  )
}

export default Main
