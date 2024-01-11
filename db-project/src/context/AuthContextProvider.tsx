import React, { createContext, useContext, useReducer } from 'react'

type AuthContextProps = {
  children: React.ReactNode
}

type User = {
  full_name: string
  password: string
  username: string
  is_staff: string
}

export type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  dispatch: React.Dispatch<Action>;
}

type Action = {
  type: string; 
  payload: User | null
}

export const AuthContext = createContext<AuthContextType | null>(null)

const initialState = {
  user: null,
  isAuthenticated: false,
}

const authReducer = (state : any, action : Action) => {
  switch (action.type) {
    case 'login':
      return {
        user: action.payload,
        isAuthenticated: true,
      }
    case 'logout':
      return {
        user: null,
        isAuthenticated: false,
      }
    default:
      throw new Error('Unkwon actions !!')
  }
}


const AuthContextProvider = ({ children } : AuthContextProps) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    authReducer,
    initialState,
  )

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

