import { FC, useEffect, useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'
import numberConvertToPersian from '../../../shared/numberConvertToPersian'
import { ThreeDots } from 'react-loader-spinner'

const ListUsers: FC = () => {
  const [users, setUsers] = useState<any>([])
  console.log(users)

  const getToken = useLocalStorage('', 'GET')
  console.log(getToken)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/customer/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setUsers(result))
  }, [])
  return (
    <div className="p-9">
      <div className="text-2xl font-Yek-ExtraBlack text-gray-600">
        <h1>لیست کاربرها</h1>
      </div>
      <div className="bg-white mt-4 rounded-xl p-8">
        <div className="text-lg font-Yek-ExtraBlack flex gap-x-1 mb-2 text-gray-700">
          <h1>تعداد:</h1>
          <p>{numberConvertToPersian(users.length)}</p>
        </div>
        <div className="space-y-4">
          {users.length > 0 ? (
            users.map((item: any) => {
              const { id, username, full_name, is_staff } = item
              return (
                <div
                  className="bg-gray-100 rounded-xl p-4 flex justify-between items-center"
                  key={id}
                >
                  <div className="flex items-center justify-center text-2xl font-Yek-ExtraBlack">
                    <h1 className="bg-gray-300 py-6 px-8 rounded-full">
                      {full_name.length === 0  ? "م" : full_name.slice(0, 1)}
                    </h1>
                  </div>
                  <div className="text-center space-y-4">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      نام کاربری
                    </h1>
                    <p className="text-lg text-gray-700 font-Yek-Regular">
                      {numberConvertToPersian(username)}
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      نام و نام خانوادگی
                    </h1>
                    <p className="text-lg font-Yek-SemiBold">{full_name.length === 0 ? "محمد سیف الهی" : full_name}</p>
                  </div>
                  <div className="text-center space-y-4 pl-8">
                    <h1 className="text-xl font-Yek-ExtraBlack text-gray-700">
                      درجه
                    </h1>
                    <div className='flex items-center text-center'>
                      <p className="text-lg font-Yek-Bold">
                        {is_staff === 'True' ? 'ادمین' : 'کاربر'}
                      </p>
                    </div>
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

export default ListUsers
