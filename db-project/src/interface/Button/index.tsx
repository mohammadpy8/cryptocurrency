import { FC, PropsWithChildren } from 'react'
import { Button as ButtonTypes } from '../../types/ButtonType/ButtonType'

const Button: FC<PropsWithChildren<ButtonTypes>> = ({
  styles,
  clickHandler,
  children,
}) => {
  return (
    <div>
      <button
        className={`${styles} text-md`}
        onClick={clickHandler}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
