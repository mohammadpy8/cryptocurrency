import { FC, useEffect, useState } from 'react'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import images from '../../../assets/images/btcadmin.png'
import useLocalStorage from '../../../hooks/useLocalStorage'
import CustomeModal from '../../../module/customModal'
import { ThreeDots } from 'react-loader-spinner'

const ListArz = () => {
  const getToken = useLocalStorage('', 'GET')

  const [listArzs, setListArzs] = useState<any>([])
  const [idArz, setIdArz] = useState()
  console.log(idArz)

  const [changeModal, setChangeModal] = useState<any>(false)
  console.log(listArzs)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/currencies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setListArzs(result))
  }, [])

  const AccessArzHandle = () => {
    fetch(`http://127.0.0.1:8000/digital/currencies/${idArz}/`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'a' }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setChangeModal(!changeModal)
      })
  }

  const cancelArzHandle = () => {
    fetch(`http://127.0.0.1:8000/digital/currencies/${idArz}/`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'n' }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setChangeModal(!changeModal)
        window.location.reload()
      })
  }

  return (
    <div className="p-9">
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
        <h1>لیست ارزها</h1>
      </div>
      <div className="bg-white mt-4 rounded-xl p-8">
        <div className="text-lg font-Yek-ExtraBlack flex gap-x-1 mb-2 text-gray-700">
          <h1>تعداد:</h1>
          <p>{numberConvertToPersian(listArzs.length)}</p>
        </div>
        <div className="space-y-4">
          {listArzs.length > 0 ? (
            listArzs.map((item: any) => {
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
                    {status === 'w' ? (
                      <button
                        className="text-lg bg-primary-300 text-white font-Yek-SemiBold p-2 rounded-xl hover:ring-[6px] transition-all duration-300"
                        onClick={() => {
                          setChangeModal(!changeModal)
                          setIdArz(id)
                        }}
                      >
                        در انتطار تایید
                      </button>
                    ) : (
                      <button
                        className={
                          status === 'a'
                            ? 'text-lg bg-green-500 text-white font-Yek-SemiBold p-2 rounded-xl'
                            : 'text-lg bg-red-600 text-white font-Yek-SemiBold p-2 rounded-xl'
                        }
                      >
                        {status === 'a' ? 'تایید شد' : 'رد شد'}
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
              <div className="mt-12 flex justify-center gap-x-20">
                <button
                  className="bg-green-500 text-white px-6 py-2 font-Yek-ExtraBlack text-xl rounded-xl hover:ring-[6px] ring-green-200 transition-all duration-300"
                  onClick={AccessArzHandle}
                >
                  تایید
                </button>
                <button
                  className="bg-red-500 text-white px-8 py-2 font-Yek-ExtraBlack text-xl rounded-xl hover:ring-[6px] ring-red-200 transition-all duration-300"
                  onClick={cancelArzHandle}
                >
                  رد
                </button>
              </div>
            </div>
          </CustomeModal>
        </div>
      </div>
    </div>
  )
}

export default ListArz
