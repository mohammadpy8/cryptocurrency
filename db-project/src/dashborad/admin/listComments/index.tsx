import { FC, useEffect, useState } from 'react'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { ThreeDots } from 'react-loader-spinner'
import CustomeModal from '../../../module/customModal'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const ListComments: FC = () => {
  const [listCommentsArz, setListCommentsArz] = useState<any>([])
  const [listCommentsMaster, setListCommentsMaster] = useState<any>([])
  console.log(listCommentsArz)
  const [changeModal, setChangeModal] = useState<any>(false)
  const [idArzComments, setIdArzComments] = useState<number>(0)
  const [idMasterComments, setIdMasterComments] = useState<number>(0)
  const [openMasterModal, setOpenMasterModal] = useState<any>(false)

  const getToken = useLocalStorage('', 'GET')
  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/comment_mastercart/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setListCommentsMaster(result))

    fetch('http://127.0.0.1:8000/digital/comment_currency/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setListCommentsArz(result))
  }, [])

  const AccessComments = () => {
    fetch(
      `http://127.0.0.1:8000/digital/currencies/${idArzComments}/comments/${idArzComments}/`,
      {
        method: 'PUT',
        body: JSON.stringify({
          status: 'a',
          body: 'متن کامنت ها عالی است و سایت خیلی عالی است',
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${getToken}`,
        },
      },
    ).then((res) => {
      if (res.status === 203 || 201) {
        setChangeModal(!changeModal)
        toast.succces('کامنت با موفقیت ثبت شد')
      }
    })
  }

  const CancelComments = () => {
    fetch(
      `http://127.0.0.1:8000/digital/currencies/${idArzComments}/comments/${idArzComments}/`,
      {
        method: 'PUT',
        body: JSON.stringify({ status: 'c', body: 'sdfvfhgf' }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${getToken}`,
        },
      },
    ).then((res) => {
      if (res.status === 203 || 201) {
        setChangeModal(!changeModal)
        toast.succces('کامنت با موفقیت رد شد')
      }
    })
  }

  const CancelCommentsMaster = () => {
    fetch(
      `http://127.0.0.1:8000/digital/mastercarts/${idMasterComments}/comments/${idMasterComments}/`,
      {
        method: 'PUT',
        body: JSON.stringify({ status: 'c', body: 'sdfvfhgf' }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${getToken}`,
        },
      },
    ).then((res) => {
      if (res.status === 203 || 201) {
        setOpenMasterModal(!changeModal)
        toast.succces('کامنت با موفقیت رد شد')
      }
    })
  }

  const AccessCommentsMaster = () => {
    fetch(
      `http://127.0.0.1:8000/digital/mastercarts/${idMasterComments}/comments/${idMasterComments}/`,
      {
        method: 'PUT',
        body: JSON.stringify({
          status: 'a',
          body: 'کامنت عالی سایت عالی درس پایگاه داده',
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${getToken}`,
        },
      },
    ).then((res) => {
      if (res.status === 203 || 201) {
        setOpenMasterModal(!openMasterModal)
        toast.succces('کامنت با موفقیت تایید شد')
      }
    })
  }

  return (
    <div className="p-9">
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
        <h1>لیست کامنت های ارز دیجیتال</h1>
      </div>
      <div className="bg-white mt-4 rounded-xl p-8">
        <div className="text-lg font-Yek-ExtraBlack flex gap-x-1 mb-2 text-gray-700">
          <h1>تعداد:</h1>
          <p>{numberConvertToPersian(listCommentsArz.length)}</p>
        </div>
        <div className="space-y-4">
          {listCommentsArz.length > 0 ? (
            listCommentsArz.map((item: any) => {
              const {
                body,
                id,
                status,
                user: { full_name },
              } = item
              return (
                <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center px-4">
                  <div className="text-center space-y-4">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      کامنت کاربر
                    </h1>
                    <p className="text-lg text-gray-700 font-Yek-Regular">
                      {full_name}
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      متن کامنت
                    </h1>
                    <p className="text-lg font-Yek-Regular text-red-600">
                      {body}
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
                          setIdArzComments(id)
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
        </div>
        <CustomeModal
          setChangeModal={setChangeModal}
          changeModal={changeModal}
          styles="w-[400px] h-[200px]"
        >
          <div>
            <div className="text-xl font-Yek-ExtraBlack text-gray-700 flex justify-center mt-8">
              <h1>تایید یا رد کردن کامنت</h1>
            </div>
            <div className="mt-12 flex justify-center gap-x-10">
              <button
                className="bg-green-500 text-white px-6 py-2 font-Yek-ExtraBlack text-xl rounded-xl hover:ring-[6px] ring-green-200 transition-all duration-300"
                onClick={AccessComments}
              >
                تایید
              </button>
              <button
                className="bg-red-500 text-white px-8 py-2 font-Yek-ExtraBlack text-xl rounded-xl hover:ring-[6px] ring-red-200 transition-all duration-300"
                onClick={CancelComments}
              >
                رد
              </button>
            </div>
          </div>
        </CustomeModal>
      </div>
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600 mt-8">
        <h1>لیست کامنت های مستر کارت</h1>
      </div>
      <div className="bg-white mt-4 rounded-xl p-8">
        <div className="text-lg font-Yek-ExtraBlack flex gap-x-1 mb-2 text-gray-700">
          <h1>تعداد:</h1>
          <p>{numberConvertToPersian(listCommentsMaster.length)}</p>
        </div>
        <div className="space-y-4">
          {listCommentsMaster.length > 0 ? (
            listCommentsMaster.map((item: any) => {
              const {
                body,
                id,
                status,
                user: { full_name },
              } = item
              return (
                <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center px-4">
                  <div className="text-center space-y-4">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      کامنت کاربر
                    </h1>
                    <p className="text-lg text-gray-700 font-Yek-Regular">
                      {full_name}
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      متن کامنت
                    </h1>
                    <p className="text-lg font-Yek-Regular text-red-600">
                      {body}
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
                          setOpenMasterModal(!changeModal)
                          setIdMasterComments(id)
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
        </div>
        <CustomeModal
          setChangeModal={setOpenMasterModal}
          changeModal={openMasterModal}
          styles="w-[400px] h-[200px]"
        >
          <div>
            <div className="text-xl font-Yek-ExtraBlack text-gray-700 flex justify-center mt-8">
              <h1>تایید یا رد کردن کامنت</h1>
            </div>
            <div className="mt-12 flex justify-center gap-x-10">
              <button
                className="bg-green-500 text-white px-6 py-2 font-Yek-ExtraBlack text-xl rounded-xl hover:ring-[6px] ring-green-200 transition-all duration-300"
                onClick={AccessCommentsMaster}
              >
                تایید
              </button>
              <button
                className="bg-red-500 text-white px-8 py-2 font-Yek-ExtraBlack text-xl rounded-xl hover:ring-[6px] ring-red-200 transition-all duration-300"
                onClick={CancelCommentsMaster}
              >
                رد
              </button>
            </div>
          </div>
        </CustomeModal>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default ListComments
