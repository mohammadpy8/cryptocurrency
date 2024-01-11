import { FC } from 'react'
import Button from '../../interface/Button';
import MasterCarts from "../../assets/images/masterCart.png"

const MasterCart: FC = () => {
  return (
    <div className="h-[235px] my-12 rounded-[35px] masterCart flex justify-between">
      <div className="pr-32 py-8 space-y-4">
        <div className='text-3xl text-white font-Yek-Bold'>
          <h1>خرید مستر کارت اختصاصی</h1>
        </div>
        <div className='text-white text-sm font-Yek-Regular'>
          <span>
            مسترکارت اختصاصی به نام شما به صورت فیزیکی و مجازی ، تحویل نسخه
            مجازی در ۵ دقیقه
          </span>
        </div>
        <div>
          <Button styles="bg-white font-Yek-Bold text-primary-100 p-3 rounded-lg hover:text-primary-500 transition-all duration-300">
            <h1>ثبت سفارش</h1>
          </Button>
        </div>
      </div>
      <div className='px-12'>
        <img src={MasterCarts} alt="masterCart" className='w-full object-cover h-auto' />
      </div>
    </div>
  )
}

export default MasterCart
