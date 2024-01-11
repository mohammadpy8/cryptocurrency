import { FC, useContext, useState } from 'react'
import emptyCart from '../../assets/images/shopping-cart.png'
import { MdOutlineAddCard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartProviderContext'
import { HiOutlineTrash } from 'react-icons/hi2'
import randomImages from '../../shared/randomImages'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import CustomeModal from '../../module/customModal'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const Cart: FC = () => {
  const CartContextStore = useContext(CartContext)
  const [chnageOpenModal, setChangeOpenModal] = useState<any>(false)
  const [deleteModal, setDeleteModal] = useState<any>(false)
  console.log('cart', CartContextStore)

  return (
    <div className="container mt-12">
      {CartContextStore?.state?.itemsCounter > 0 ? (
        <div className="mt-12">
          <div>
            <h1 className="text-4xl text-gray-700 font-Yek-ExtraBlack border-b-2 pb-8">
              سبد خرید شما
            </h1>
          </div>
          <div className="flex justify-between gap-x-8 mt-12">
            <div className="w-[60%] space-y-4">
              {CartContextStore?.state.selectedItems.map((item: any) => {
                const { title, id, price } = item

                return (
                  <div
                    className="bg-white shadow-sm rounded-xl p-4 flex justify-between"
                    key={id}
                  >
                    <div className="flex items-center gap-x-8">
                      <div>
                        <img
                          src={randomImages(title)}
                          alt="titele"
                          className="rounded-2xl w-[150px] h-[85px]"
                        />
                      </div>
                      <div className="text-xl font-Yek-ExtraBlack text-gray-800">
                        <h1>{title}</h1>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-8">
                      <div className="text-xl font-Yek-ExtraBlack text-gray-700">
                        <h1>${price}</h1>
                      </div>
                      <div>
                        <button onClick={() => setDeleteModal(!deleteModal)}>
                          <HiOutlineTrash color="red" size={35} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="w-[40%] bg-white h-[380px] rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-center gap-x-2 border-b-2 pb-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg font-Yek-ExtraBlack">
                    اطلاعات پرداخت
                  </h1>
                </div>
              </div>
              <div className="mt-4 border-b-2 pb-4">
                <div className="text-lg font-Yek-ExtraBlack">
                  <h1>کد تخفیف</h1>
                </div>
                <div className="flex gap-x-6 mt-4">
                  <input
                    type="text"
                    placeholder="کد تخفیف را وارد کنید"
                    className="bg-gray-100 outline-none rounded-xl px-2 py-3 w-[400px] font-Yek-ExtraBold"
                  />
                  <button className="text-lg font-Yek-ExtraBlack text-white bg-primary-300 rounded-xl px-4 hover:ring-[6px] transition-all duration-300">
                    اعمال
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between border-b-2 pb-4">
                <div className="text-lg font-Yek-ExtraBlack">
                  <h1>جمع کل</h1>
                </div>
                <div className="text-xl font-Yek-ExtraBlack text-gray-700">
                  <p>
                    ${numberConvertToPersian(CartContextStore?.state.total)}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div className="text-lg font-Yek-ExtraBlack">
                  <h1>مبلغ قابل پرداخت</h1>
                </div>
                <div className="text-green-500 text-xl font-Yek-ExtraBlack">
                  <span>
                    ${numberConvertToPersian(CartContextStore?.state.total)}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  className="bg-primary-300 w-full py-3 text-white rounded-xl font-Yek-ExtraBlack hover:ring-[6px] duration-300 transition-all"
                  onClick={() => setChangeOpenModal(!chnageOpenModal)}
                >
                  پرداخت
                </button>
              </div>
            </div>
            <CustomeModal
              setChangeModal={setChangeOpenModal}
              changeModal={chnageOpenModal}
              styles="w-[500px] h-[200px]"
            >
              <div>
                <div className="flex justify-center mt-8 text-xl font-Yek-ExtraBlack">
                  <h1>آیا برای پرداخت مطمعن هستید؟</h1>
                </div>
                <div className="mt-12 flex gap-x-20 justify-center">
                  <button
                    className="text-white text-lg bg-green-500 px-12 py-2 font-Yek-ExtraBlack rounded-xl"
                    onClick={() => {
                      CartContextStore?.dispatch({ type: 'CHECKOUT' })
                      toast.success('پرداخت با موفقیت انجام شد')
                    }}
                  >
                    بله
                  </button>
                  <button
                    className="text-white text-lg bg-red-500 px-9 py-2 font-Yek-ExtraBlack rounded-xl"
                    onClick={() => setChangeOpenModal(!chnageOpenModal)}
                  >
                    انصراف
                  </button>
                </div>
              </div>
            </CustomeModal>
          </div>
          <CustomeModal
            setChangeModal={setDeleteModal}
            changeModal={deleteModal}
            styles="w-[500px] h-[200px]"
          >
            {' '}
            <div>
              <div className="flex justify-center mt-8 text-xl font-Yek-ExtraBlack">
                <h1>آیا برای حذف محصول مطمعن هستید؟</h1>
              </div>
              <div className="mt-12 flex gap-x-20 justify-center">
                <button
                  className="text-white text-lg bg-green-500 px-12 py-2 font-Yek-ExtraBlack rounded-xl"
                  onClick={() => {
                    CartContextStore?.dispatch({})
                    toast.success('حذف محصول با موفقیت انجام شد')
                  }}
                >
                  بله
                </button>
                <button
                  className="text-white text-lg bg-red-500 px-9 py-2 font-Yek-ExtraBlack rounded-xl"
                  onClick={() => setDeleteModal(!deleteModal)}
                >
                  انصراف
                </button>
              </div>
            </div>
          </CustomeModal>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-8">
          <div>
            <h1 className="text-5xl font-Yek-ExtraBlack text-primary-500">
              سبد خرید شما خالی است :)
            </h1>
          </div>
          <div>
            <img src={emptyCart} alt="cart" className="w-[300px] h-[300px] " />
          </div>
          <div className="text-3xl font-Yek-ExtraBlack">
            <h1>برای ثبت سفارش به لینک زیر مراجعه کنید!</h1>
          </div>
          <div className="pb-10">
            <Link to="/arz-shop">
              <button className="flex gap-x-2 bg-primary-300 text-white p-3 rounded-2xl font-Yek-ExtraBold items-center hover:ring-[7px] transition-all duration-300">
                <MdOutlineAddCard color="#fff" size={30} />
                <span className="text-xl">ثبت سفارش</span>
              </button>
            </Link>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}
    </div>
  )
}

export default Cart
