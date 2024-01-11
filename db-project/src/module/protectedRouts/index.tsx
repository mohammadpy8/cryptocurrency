import { FC, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

const ProtedtedRoutes: FC<React.PropsWithChildren> = ({ children }) => {
  const Auth = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!Auth?.isAuthenticated) {
      navigate('/login')
      toast.error('برای دسترسی وارد شوید.')
    }
  }, [Auth?.isAuthenticated, navigate])
  return Auth?.isAuthenticated ? children : null
}

export default ProtedtedRoutes
