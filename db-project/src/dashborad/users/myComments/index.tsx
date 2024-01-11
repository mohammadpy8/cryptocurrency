import { FC, useEffect, useState } from 'react'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { ThreeDots } from 'react-loader-spinner'

const MyComments: FC = () => {
  const [listCommentsArz, setListCommentsArz] = useState<any>([])
  const [listCommentsMaster, setListCommentsMaster] = useState<any>([])

  const getToken = useLocalStorage('', 'GET')
  console.log(listCommentsArz)
  console.log('hhhhhhhhhh', listCommentsMaster)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/comment_currency/me/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setListCommentsArz(result))

    fetch('http://127.0.0.1:8000/digital/comment_mastercart/me/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setListCommentsMaster(result))
  }, [])

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
                <div
                  className="bg-gray-100 rounded-xl p-4 flex justify-between items-center px-4"
                  key={id}
                >
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
                    {status === 'c' && (
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
        </div>
      </div>
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600 mt-6">
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
                <div
                  className="bg-gray-100 rounded-xl p-4 flex justify-between items-center px-4"
                  key={id}
                >
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
                    {status === 'c' && (
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
        </div>
      </div>
    </div>
  )
}

export default MyComments
