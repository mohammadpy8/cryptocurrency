import { FC, useEffect, useState } from 'react'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import images from '../../../assets/images/preview.png'
import CustomeModal from '../../../module/customModal'
import useLocalStorage from '../../../hooks/useLocalStorage'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import { ThreeDots } from 'react-loader-spinner'

interface masterType {
  title: string
  price: string
  description: string
  inventory: string
  country: ''
}

const ListMaster: FC = () => {
  const [changeModal, setChangeModal] = useState<any>(false)
  const [matserDetails, setMasterDetails] = useState<masterType>({
    title: '',
    price: '',
    description: '',
    inventory: '',
    country: '',
  })

  const [listMasterCart, setListMasterCart] = useState<any>([])
  const [idMater, setIdMaster] = useState<number>(0)
  const [openMoDalDelete, setOpenModalDelete] = useState<any>(false)

  const getToken = useLocalStorage('', 'GET')

  const changeHandlerMaster = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setMasterDetails({ ...matserDetails, [name]: value })
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/mastercarts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('result', result)
        setListMasterCart(result)
      })
  }, [])

  const submitHandlerMaster = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch('http://127.0.0.1:8000/digital/mastercarts/', {
      method: 'POST',
      body: JSON.stringify(matserDetails),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    }).then((res) => {
      const status = res.status
      if (status === 200 || 201) {
        toast.success('مستر کارت با موفقیت ثبت شد.')
        setChangeModal(!changeModal)
        setMasterDetails({
          title: '',
          price: '',
          description: '',
          inventory: '',
          country: '',
        })
      }
    })
  }

  const deleteMasterCartHandle = () => {
    fetch(`http://127.0.0.1:8000/digital/mastercarts/${idMater}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    }).then((res) => {
      const status = res.status
      if (status === 204 || 201) {
        toast.success('مسترکارت با موفقیت حذف شد')
        setOpenModalDelete(!openMoDalDelete);
      }
    })
  }

  return (
    <div className="p-9">
      <div className="flex justify-between">
        <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
          <h1>لیست مستر کارت ها</h1>
        </div>
        <div className="text-lg font-Yek-Bold ml-4">
          <button
            className="text-white bg-primary-300 p-2 rounded-xl hover:ring-[6px] transition-all duration-300"
            onClick={() => setChangeModal(true)}
          >
            اضافه کردن مسترکارت
          </button>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-xl p-8">
        <div className="text-lg font-Yek-ExtraBlack flex gap-x-1 mb-2 text-gray-700">
          <h1>تعداد:</h1>
          <p>{numberConvertToPersian(listMasterCart.length)}</p>
        </div>
        <div className="space-y-4">
          {listMasterCart.length > 0 ? (
            listMasterCart.map((item: any) => {
              const { id, title, price, country } = item
              return (
                <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center">
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
                      {title}
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
                      <div className="bg-blue-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                        <span>مسترکارت</span>
                      </div>
                      <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                        <span>{country}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      کشور
                    </h1>
                    <p className="text-lg text-gray-700 font-Yek-Regular">
                      {country}
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      حذف محصول
                    </h1>
                    <button
                      className="font-Yek-Bold bg-red-600 text-white px-3 py-2 rounded-xl hover:ring-[6px] transition-all ring-red-300 duration-300"
                      onClick={() => {
                        setOpenModalDelete(!openMoDalDelete)
                        setIdMaster(id)
                      }}
                    >
                      حذف
                    </button>
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
        </div>
        <CustomeModal
          setChangeModal={setOpenModalDelete}
          changeModal={openMoDalDelete}
          styles="w-[500px] h-[250px]"
        >
          <div>
            <div className="mt-10 flex items-center justify-center font-Yek-ExtraBlack text-xl text-gray-700">
              <h1>آیا از حذف مستر کارت مطمعن هستید</h1>
            </div>
            <div className="flex items-center gap-x-16 mt-20 justify-center">
              <button
                className="text-white bg-green-500 px-6 py-2 font-Yek-ExtraBlack rounded-xl hover:ring-[6px] ring-green-200 transition-all duration-300 text-xl"
                onClick={deleteMasterCartHandle}
              >
                تایید
              </button>
              <button
                className="bg-red-500 text-white px-6 py-2 font-Yek-ExtraBlack text-xl rounded-xl hover:ring-[6px] ring-red-200 transition-all duration-300"
                onClick={() => setOpenModalDelete(!openMoDalDelete)}
              >
                بستن
              </button>
            </div>
          </div>
        </CustomeModal>
      </div>
      <CustomeModal
        setChangeModal={setChangeModal}
        changeModal={changeModal}
        styles="w-[600px] h-[670px]"
      >
        <div>
          <div className="flex justify-center mt-4">
            <h1 className="text-2xl font-Yek-ExtraBlack text-gray-700">
              ثبت مستر کارت جدید
            </h1>
          </div>
          <div className="mt-4">
            <form onSubmit={submitHandlerMaster}>
              <div className="space-y-3">
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    عنوان مسترکارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="عنوان مستر کارت را وارد کنید"
                    name="title"
                    value={matserDetails.title}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    قیمت مستر کارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="قیمت محصول را وارد کنید"
                    name="price"
                    value={matserDetails.price}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    تعداد مستر کارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="تعداد محصول را وارد کنید"
                    name="inventory"
                    value={matserDetails.inventory}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    کشور مستر کارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="کشور محصول را وارد کنید"
                    name="country"
                    value={matserDetails.country}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 py-3 px-2 text-lg font-Yek-Bold rounded-xl "
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-Yek-ExtraBold text-gray-700">
                    توضیحات مسترکارت <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="description"
                    value={matserDetails.description}
                    onChange={changeHandlerMaster}
                    className="outline-none bg-gray-100 pt-2 py-6  px-2 text-lg font-Yek-Bold rounded-xl resize-none"
                    placeholder="توضیحات محصول را وارد کنید"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button className="text-lg bg-primary-300 text-white w-full py-3 rounded-xl hover:ring-[6px] transition-all duration-300 font-Yek-SemiBold">
                  ارسال مسترکارت
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

export default ListMaster
