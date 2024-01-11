import { FC, useEffect, useState, useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/home'
import Layout from './layout'
import NotFound from './pages/notFound'
import Arzs from './pages/arzs'
import Login from './pages/login'
import ArzShop from './pages/arzShop'
import MasterShop from './pages/masterShop'
import Cart from './pages/cart'
import DetailsArz from './pages/detailsArz'
import DetailsMasterCart from './pages/detailsMasterCart'
import AdminLayoutPanel from './dashborad/admin/layout'
import MainAdminPanel from './dashborad/admin/main'
import ListArz from './dashborad/admin/listArz'
import EditInfo from './dashborad/admin/editInfo'
import ListMaster from './dashborad/admin/listMaster'
import UsersLayoutPanel from './dashborad/users/layout'
import MainUsersPanel from './dashborad/users/main'
import ListUsers from './dashborad/admin/listUsers'
import ListComments from './dashborad/admin/listComments'
import MyComments from './dashborad/users/myComments'
import MyArz from './dashborad/users/myArz'
import EditInfoUsers from './dashborad/users/editInfo'
import ProtedtedRoutes from './module/protectedRouts'
import useLocalStorage from './hooks/useLocalStorage'
import useSaveInfoLocalStorage from './hooks/useSaveInfoLocalStorage'
import useAuth from './hooks/useAuth'
import { AuthContext } from './context/AuthContextProvider'
import { AuthContextType } from './context/AuthContextProvider'

interface UserInfos {
  username?: string
  password?: string
  is_staff?: string
  full_name?: string
}

const App = () => {
  const [userInfo, setUserInfo] = useState<UserInfos>({
    username: '',
    password: '',
    is_staff: '',
    full_name: '',
  })

  // const [statue, setStatus] = useState<number>(0)

  const getToken = useLocalStorage('', 'GET')
  console.log(getToken)

  const contextUser = useContext(AuthContext)

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/customer/me/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result: any) => {
        if (result.username) {
          useSaveInfoLocalStorage(result, 'SET')
          contextUser?.dispatch({ type: 'login', payload: result })
        }
      })
  }, [])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-arz" element={<Arzs />} />
          <Route
            path="/arz-shop"
            element={
              <ProtedtedRoutes>
                <ArzShop />
              </ProtedtedRoutes>
            }
          />
          <Route
            path="/arz-shop/:id"
            element={
              <ProtedtedRoutes>
                <DetailsArz />
              </ProtedtedRoutes>
            }
          />
          <Route
            path="/master-shop"
            element={
              <ProtedtedRoutes>
                <MasterShop />
              </ProtedtedRoutes>
            }
          />
          <Route
            path="/master-shop/:id"
            element={
              <ProtedtedRoutes>
                <DetailsMasterCart />
              </ProtedtedRoutes>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtedtedRoutes>
                <Cart />
              </ProtedtedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/admin-dashboard"
          element={
            <ProtedtedRoutes>
              <AdminLayoutPanel />
            </ProtedtedRoutes>
          }
        >
          <Route
            path="/admin-dashboard/dashboard"
            element={<MainAdminPanel />}
          />
          <Route path="/admin-dashboard/list-arz" element={<ListArz />} />
          <Route path="/admin-dashboard/edit-info" element={<EditInfo />} />
          <Route path="/admin-dashboard/list-users" element={<ListUsers />} />
          <Route
            path="/admin-dashboard/list-comments"
            element={<ListComments />}
          />
          <Route
            path="/admin-dashboard/list-master-cart"
            element={<ListMaster />}
          />
        </Route>
        <Route path="/users-dashboard" element={<UsersLayoutPanel />}>
          <Route
            path="/users-dashboard/dashboard"
            element={<MainUsersPanel />}
          />
          <Route path="/users-dashboard/my-comments" element={<MyComments />} />
          <Route path="/users-dashboard/my-arz" element={<MyArz />} />
          <Route
            path="/users-dashboard/edit-info"
            element={<EditInfoUsers />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
