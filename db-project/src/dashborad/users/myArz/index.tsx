import { FC, useEffect, useState } from 'react'
import CustomeModal from '../../../module/customModal'
import useLocalStorage from '../../../hooks/useLocalStorage'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import { ThreeDots } from 'react-loader-spinner'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import images from '../../../assets/images/btcadmin.png'

interface detailsType {
  title: string
  price: string
  description: string
}

const MyArz: FC = () => {
  const [changeModal, setChangeModal] = useState<boolean>(false)
  const [details, setDetails] = useState<detailsType>({
    title: '',
    price: '',
    description: '',
  })
  const getToken = useLocalStorage('', 'GET')
  const changeHanderDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setDetails({ ...details, [name]: value })
  }

  const [myArz, setMyArz] = useState<any>([])

  const sendArz = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch('http://127.0.0.1:8000/digital/currencies/', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    }).then((res) => {
      const status = res.status
      if (status === 200 || 201) {
        toast.success('محصول با موفقیت ثبت شد.')
        setChangeModal(!changeModal)
        setDetails({ title: '', price: '', description: '' })
        window.location.reload()
      }
    })
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/currencies/me/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setMyArz(result))
  }, [])

  console.log(myArz)

  return (
    <div className="p-12">
      <div className="">
        <div className="flex justify-between">
          <div>
            <h1 className="text-gray-600 text-2xl font-Yek-ExtraBlack">
              محصولات ارزی من
            </h1>
          </div>
          <div>
            <button
              className="text-white text-lg font-Yek-SemiBold bg-primary-300 p-3 rounded-xl hover:ring-[6px] transition-all duration-300"
              onClick={() => setChangeModal(!changeModal)}
            >
              ثبت محصول جدید
            </button>
          </div>
        </div>
        <div className="bg-white mt-4 rounded-xl p-8 w-full">
          <div className="space-y-4">
            {myArz.length > 0 ? (
              myArz.map((item: any) => {
                const {
                  title,
                  price,
                  status,
                  id,
                  user: { full_name },
                } = item
                return (
                  <div
                    className="bg-gray-100 rounded-xl p-4 flex justify-between items-center"
                    key={id}
                  >
                    <div>
                      <img
                        src={images}
                        alt="btc"
                        className="w-28 h-28 rounded-full object-fill"
                      />
                    </div>
                    <div className="text-center space-y-4">
                      <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                        محصول
                      </h1>
                      <p className="text-lg text-gray-700 font-Yek-Regular">
                        ارز دیجیتال {title}
                      </p>
                    </div>
                    <div className="text-center space-y-4">
                      <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                        قیمت
                      </h1>
                      <p className="text-lg font-Yek-Regular text-red-600">
                        {numberConvertToPersian(price)}تومان
                      </p>
                    </div>
                    <div className="text-center space-y-4">
                      <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                        دسته بندی
                      </h1>
                      <div className="flex gap-x-4 p-3">
                        <div className="bg-green-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                          <span>ارز دیجیتال</span>
                        </div>
                        <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                          <span>{title}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                        عرضه کننده
                      </h1>
                      <p className="text-lg text-gray-700 font-Yek-Regular">
                        {full_name}
                      </p>
                    </div>
                    <div className="text-center space-y-4">
                      <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                        وضعیت
                      </h1>
                      {status === 'a' && (
                        <button className="text-white bg-green-500 rounded-xl p-3 font-Yek-ExtraBlack">
                          تایید شده
                        </button>
                      )}
                      {status === 'w' && (
                        <button className="text-white bg-primary-300 rounded-xl p-3 font-Yek-ExtraBlack">
                          در انتطار تایید
                        </button>
                      )}
                      {status === 'n' && (
                        <button className="text-white bg-red-500 rounded-xl p-3 font-Yek-ExtraBlack">
                          رد شده
                        </button>
                      )}
                    </div>
                  </div>
                )
              })
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
            <CustomeModal
              setChangeModal={setChangeModal}
              changeModal={changeModal}
              styles="w-[450px] h-[200px]"
            >
              <div className="mt-12">
                <div className="flex items-center justify-center text-xl font-Yek-ExtraBlack text-gray-700">
                  <h1>لطفا یا محصول را تایید را رد کنید</h1>
                </div>
                <div className="mt-12 flex justify-center gap-x-20"></div>
              </div>
            </CustomeModal>
          </div>
        </div>
      </div>
      <CustomeModal
        changeModal={changeModal}
        setChangeModal={setChangeModal}
        styles="w-[600px] h-[600px]"
      >
        <div>
          <div className="flex justify-center mt-12">
            <h1 className="text-2xl font-Yek-ExtraBlack text-gray-700">
              ثبت محصول جدید ارزی
            </h1>
          </div>
          <div className="mt-8">
            <form onSubmit={sendArz}>
              <div className="space-y-3">
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    عنوان محصول <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="عنوان محصول را وارد کنید"
                    value={details.title}
                    onChange={changeHanderDetails}
                    name="title"
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    قیمت محصول <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="قیمت محصول را وارد کنید"
                    value={details.price}
                    onChange={changeHanderDetails}
                    name="price"
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    توضیحات محصول <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="description"
                    value={details.description}
                    onChange={changeHanderDetails}
                    className="outline-none bg-gray-100 pt-2 py-20  px-2 text-lg font-Yek-Bold rounded-xl resize-none"
                    placeholder="توضیحات محصول را وارد کنید"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button className="text-lg bg-primary-300 text-white w-full py-3 rounded-xl hover:ring-[6px] transition-all duration-300 font-Yek-SemiBold">
                  ارسال محصول
                </button>
              </div>
            </form>
          </div>
        </div>
      </CustomeModal>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default MyArz
