import { FC, useEffect, useState } from 'react'
import { loginType, registerType } from '../../types/loginTypes/LoginTypes'
import registerValidation from '../../validation/registerValidation'
import loginValidation from '../../validation/loginValidation'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'

const Login: FC = () => {
  const [errorRegister, setErrorRegister] = useState<registerType>({
    full_name: '',
    username: '',
    password: '',
  })
  const [errorLogin, setErrroLogin] = useState<loginType>({
    username: '',
    password: '',
  })
  const [loginForm, setFormLogin] = useState<string>('register')
  const [login, setLogin] = useState<loginType>({
    username: '',
    password: '',
  })
  const [register, setRegister] = useState<registerType>({
    full_name: '',
    username: '',
    password: '',
  })

  const [registerTouched, setRegisterTouched] = useState<registerType>({
    full_name: '',
    username: '',
    password: '',
  })

  const [loginTouched, setLoginTouched] = useState<loginType>({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const registerChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const name = event.target.name
    const value = event.target.value
    console.log(register)
    setRegister({ ...register, [name]: value })
  }

  const loginChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setLogin({ ...login, [name]: value })
  }

  const registerFocusHandler = (
    event: React.FocusEvent<HTMLInputElement, Element>,
  ) => {
    setRegisterTouched({ ...registerTouched, [event.target.name]: true })
  }
  
  useEffect(() => {
    setErrorRegister(registerValidation(register))
  }, [register, registerTouched])

  const loginFocusHandler = (
    event: React.FocusEvent<HTMLInputElement, Element>,
  ) => {
    setLoginTouched({ ...loginTouched, [event.target.name]: true })
  }

  const history = 

  useEffect(() => {
    setErrroLogin(loginValidation(login))
  }, [login, loginTouched])

  const sendInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch('http://127.0.0.1:8000/api/signup/', {
      method: 'POST',
      body: JSON.stringify({
        ...register,
        is_staff: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const status = res.status
        const success = () => {
          toast.success('ثبت نام با موفقیت انجام شد')
          setRegister({ full_name: '', password: '', username: '' })
          setFormLogin('login')
        }
        console.log(status)
        switch (status) {
          case 201 || 200:
            return success();
          case 400:
            return toast.error('کاربر قبلا ثبت نام کرده است')
          default:
            return toast.error('خطا در سامانه ثبت نام')
        }
      })
      .catch((error) => console.error('Error:', error))
  }

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch('http://127.0.0.1:8000/auth/jwt/create/', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(
          res.json().then((r) => {
            const token = r.access
            useLocalStorage(token, 'SET')
          }),
        )
        const status = res.status
        if (status === 201 || 200) {
          toast.success('با موفقیت وارد شدید')
          setTimeout(() => {
            navigate('/')
            window.location.reload();
          }, 1500)
        } else if (status === 401) {
          res.json().then((r) => {
            const message = r.message
            if (message === '') {
              toast.error('نام کاربری یافت نشد')
            }
          })
        } else if (status === 402) {
          toast.error('کلمه عبور نادرست است')
        } else {
          toast.error('سامانه به خطا خورده است')
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.error('Error:', error))
  }

  return (
    <div className="container flex justify-center py-12">
      {loginForm === 'register' ? (
        <div className="bg-white w-[50%] h-auto loginPage rounded-xl">
          <div className="px-16">
            <div className="flex justify-around mt-12  text-2xl font-Yek-Bold w-full text-center">
              <div className="border-b-4 pb-4 w-full">
                <button onClick={() => setFormLogin('login')}>ورود</button>
              </div>
              <div className="w-full border-b-4 border-primary-400 text-primary-400 pb-4">
                <button onClick={() => setFormLogin('register')}>
                  ثبت نام
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8 text-3xl font-Yek-ExtraBlack">
              <h1>ثبت نام در ارز ایرانیان</h1>
            </div>
            <div className="mt-8">
              <form onSubmit={sendInfo}>
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      className={
                        errorRegister.full_name && registerTouched.full_name
                          ? 'w-full outline-none font-Yek-Bold border-2  border-solid  transition-all border-red-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                          : 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-green-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                      }
                      placeholder="نام و نام خانوادگی"
                      type="text"
                      name="full_name"
                      value={register.full_name}
                      onChange={registerChangeHandler}
                      onFocus={registerFocusHandler}
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div>
                    {errorRegister.full_name && registerTouched.full_name && (
                      <span className="errorValidation font-Yek-Bold">
                        {errorRegister.full_name}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      className={
                        errorRegister.username && registerTouched.username
                          ? 'w-full outline-none font-Yek-Bold border-2  border-solid  transition-all border-red-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                          : 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-green-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                      }
                      placeholder="شماره تلفن"
                      type="number"
                      name="username"
                      value={register.username}
                      onChange={registerChangeHandler}
                      onFocus={registerFocusHandler}
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    {errorRegister.username && registerTouched.username && (
                      <span className="errorValidation font-Yek-Bold">
                        {errorRegister.username}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      className={
                        errorRegister.password && registerTouched.password
                          ? 'w-full outline-none font-Yek-Bold border-2  border-solid transition-all border-red-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                          : 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-green-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                      }
                      placeholder="رمز عبور"
                      type="text"
                      name="password"
                      value={register.password}
                      onChange={registerChangeHandler}
                      onFocus={registerFocusHandler}
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    {errorRegister.password && registerTouched.password && (
                      <span className="errorValidation font-Yek-Bold">
                        {errorRegister.password}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full mt-8">
                  {(errorRegister.full_name && registerTouched.full_name) ||
                  (errorRegister.password && registerTouched.password) ||
                  (errorRegister.username && registerTouched.username) ? (
                    <button
                      className="bg-primary-300 w-full py-4 text-xl font-Yek-ExtraBlack text-white rounded-xl hover:ring-[6px] transition-all duration-300 opacity-50"
                      disabled
                    >
                      ارسال کد تایید
                    </button>
                  ) : (
                    <button className="bg-primary-300 w-full py-4 text-xl font-Yek-ExtraBlack text-white rounded-xl hover:ring-[6px] transition-all duration-300">
                      ارسال کد تایید
                    </button>
                  )}
                </div>
                <div className="flex justify-center items-center gap-x-2 my-4 text-lg font-Yek-Bold">
                  <span>اگر قبلا ثبت نام کرده اید!</span>
                  <span
                    className="text-primary-300 cursor-pointer"
                    onClick={() => setFormLogin('login')}
                  >
                    وارد شوید
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white w-[50%] h-auto loginPage rounded-xl">
          <div className="px-16">
            <div className="flex justify-around mt-12  text-2xl font-Yek-Bold w-full text-center">
              <div
                className={
                  loginForm === 'login'
                    ? 'w-full border-b-4 border-primary-400 text-primary-400 pb-4'
                    : 'border-b-4 pb-4 w-full'
                }
              >
                <button onClick={() => setFormLogin('login')}>ورود</button>
              </div>
              <div
                className={
                  loginForm === 'register'
                    ? 'w-full border-b-4 border-primary-400 text-primary-400 pb-4'
                    : 'border-b-4 pb-4 w-full'
                }
              >
                <button onClick={() => setFormLogin('register')}>
                  ثبت نام
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8 text-3xl font-Yek-ExtraBlack">
              <h1>ورود به ارز ایرانیان</h1>
            </div>
            <div className="mt-8">
              <form onSubmit={loginSubmit}>
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      className={
                        errorLogin.username && loginTouched.username
                          ? 'w-full outline-none font-Yek-Bold border-2  border-solid  transition-all border-red-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                          : 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-green-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                      }
                      placeholder="شماره تلفن"
                      type="text"
                      name="username"
                      value={login.username}
                      onChange={loginChangeHandler}
                      onFocus={loginFocusHandler}
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    {errorLogin.username && loginTouched.username && (
                      <span className="errorValidation font-Yek-Bold">
                        {errorLogin.username}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      className={
                        errorLogin.password && loginTouched.password
                          ? 'w-full outline-none font-Yek-Bold border-2   transition-all border-red-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                          : 'w-full outline-none font-Yek-Bold border-2  border-solid border-transparent transition-all focus:border-green-500 placeholder:text-gray-400 placeholder:select-none text-xl rounded-xl py-5  placeholder:text-right pr-14  pl-4 bg-gray-100 '
                      }
                      placeholder="رمز عبور"
                      type="text"
                      name="password"
                      value={login.password}
                      onChange={loginChangeHandler}
                      onFocus={loginFocusHandler}
                    />
                    <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 border-solid transition-all border-gray-400 pl-3 right-3 border-l-[3px] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transition-all h-6 fill-gray-400 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  {errorLogin.password && loginTouched.password && (
                    <span className="errorValidation font-Yek-Bold">
                      {errorLogin.password}
                    </span>
                  )}
                </div>
                <div className="w-full mt-8">
                  {(errorLogin.username && loginTouched.username) ||
                  (errorLogin.password && loginTouched.password) ? (
                    <button
                      className="bg-primary-300 w-full py-4 text-xl font-Yek-ExtraBlack text-white rounded-xl hover:ring-[6px] transition-all duration-300"
                      disabled
                    >
                      وارد شدن
                    </button>
                  ) : (
                    <button className="bg-primary-300 w-full py-4 text-xl font-Yek-ExtraBlack text-white rounded-xl hover:ring-[6px] transition-all duration-300">
                      وارد شدن
                    </button>
                  )}
                </div>
                <div className="flex justify-center items-center gap-x-2 mt-4 text-lg font-Yek-Bold mb-4">
                  <span>اگر ثبت نام نکرده اید!</span>
                  <span
                    className="text-primary-300 cursor-pointer"
                    onClick={() => setFormLogin('register')}
                  >
                    ثبت نام کنید
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Login
