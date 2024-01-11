import React, { createContext, useReducer } from 'react'

type CartContextProps = {
  children: React.ReactNode
}
type Cart = {
  datetime_created: string
  description: string
  id: number
  price: number
  status: string
  title: string
  user: {
    full_name: string
  }
}

interface stateType {
  datetime_created: string
  description: string
  id: number
  price: number
  status: string
  title: string
  quantity?: number
  user: {
    full_name: string
  }
}

interface Action {
  type: string
  payload: {
    datetime_created: string
    description: string
    id: number
    price: number
    status: string
    title: string
    quantity?: number
    user: {
      full_name: string
    }
  }
}

type init = {
  selectedItems: stateType[]
  itemsCounter: number
  total: number
  checkout: boolean
}

type CartContextType = {
  state: init
  dispatch: React.Dispatch<Action>
}

export const CartContext = createContext<CartContextType | null>(null)

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
}

const sumItem = (items: any) => {
  const itemsCounter = items.reduce(
    (total: any, product: any) => total + product.quantity,
    0,
  )
  const total = items
    .reduce(
      (total: any, product: any) => total + product.quantity * product.price,
      0,
    )
    .toFixed(2)
  return { total, itemsCounter }
}

const cartReducer = (state: init, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (
        !state.selectedItems.find((item: Cart) => item.id === action.payload.id)
      ) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        })
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItem(state.selectedItems),
        checkout: false,
      }
    case 'REMOVE_ITEM':
      const newSelectedItems = state.selectedItems.filter(
        (item: any) => item.id !== action.payload.id,
      )
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItem(state.selectedItems),
      }
    case 'CHECKOUT':
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      }
    case 'CLEAR':
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      }
    default:
      return state
  }
}

const CartContextProvider = ({ children }: CartContextProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
