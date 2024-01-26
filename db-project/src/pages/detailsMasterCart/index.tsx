import { FC, useEffect, useState } from 'react'
import images from '../../assets/images/preview.png'
import numberConvertToPersian from '../../shared/numberConvertToPersian'
import { IoIosArrowBack, IoMdCart } from 'react-icons/io'
import {
  BiSolidBadgeDollar,
  BiSolidOffer,
  BiSolidCategory,
  BiSticker,
} from 'react-icons/bi'
import { GiMoneyStack } from 'react-icons/gi'
import { LuUser2 } from 'react-icons/lu'
import { FaStar } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router'
import useLocalStorage from '../../hooks/useLocalStorage'
import toast from 'react-hot-toast'
import randomImages from '../../shared/randomImages'

interface masterType {
  title: string
  price: string
  description: string
  inventory: string
  country: ''
}

interface commentsTypes {
  id: number
  user: { full_name: string }
  body: string
}

const DetailsMasterCart: FC = () => {
  const [masterOffer, setMasterOffer] = useState<number>(20)
  const [masterPrice, setMasterPrice] = useState<number>(1560000000)
  const [openSection, setOpenSection] = useState<boolean>(false)
  const [accordion, setAccordion] = useState<number>(0)
  const [listMaster, setListMaster] = useState<masterType[]>([])
  const [body, setBody] = useState<string>('')
  const [listComments, setListComments] = useState<any>([])
  const navigate = useNavigate()

  console.log('nfdjfb', listComments)

  const commentsChangeHnadler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBody(event.target.value)
  }

  const { id } = useParams()
  console.log(id)

  const getToken = useLocalStorage('', 'GET')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/mastercarts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('id', id)
        setListMaster(result.filter((item: any) => item.id === Number(id)))
      })
    fetch(`http://127.0.0.1:8000/digital/mastercarts/${id}/comments/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) =>
        setListComments(result.filter((item: any) => item.status === 'a')),
      )
  }, [id])

  const sendComments = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch(`http://127.0.0.1:8000/digital/mastercarts/${id}/comments/`, {
      method: 'POST',
      body: JSON.stringify({ body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    }).then((res) => {
      const status = res.status
      if (status === 201 || 200) {
        setBody('')
        toast.success('کامنت شما با موفقیت ثبت شد')
      }
    })
  }
  return (
    <div className="container mt-12">
      <div className="relative">
        <div className="absolute left-0 bg-red-600 flex text-white px-4 py-2 text-xl font-Yek-ExtraBold text-center rounded-xl z-10">
          <h1>{numberConvertToPersian(masterOffer)}</h1>
          <span>%</span>
        </div>
        <div className="shadow-sm bg-white h-auto rounded-xl p-9 flex gap-x-9">
          <div>
            <img
              src={randomImages(listMaster[0]?.country)}
              alt="image"
              className="w-[400px] h-[300px] rounded-xl"
            />
          </div>
          <div>
            <div className="text-[45px] font-Yek-ExtraBlack text-gray-800">
              <h1>{listMaster[0]?.title}</h1>
            </div>
            <div className="flex gap-x-4 mt-4">
              <div className="bg-blue-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                <span>مستر کارت</span>
              </div>
              <div className="bg-red-500 rounded-xl text-md font-Yek-ExtraBlack text-white px-2 py-1">
                <span>{listMaster[0]?.country}</span>
              </div>
            </div>
            <div className="w-[800px] mt-4 text-[15px] font-Yek-Regular leading-7">
              <span>
                این ویژگی یکی از بهترین خدماتی هست که میشه به کاربران ایرانی داد
                ، این یعنی شما میتونید بعد از ساخت حساب کاربریتون در کیف پول من
                اقدام به ساخت زیرمجموعه با نام دلخواه خودتون داشته باشید و
                موجودی های متفاوتی رو در هر کیف پول داشته باشید ، به صورت مثال
                پدر خانواده حساب کاربری خودش رو ایجاد میکنه و تصمیم میگیره برای
                3 فرزندش هم 3 اکانت مختلف با نام هر کدومشون ایجاد کنه که دارای
                ادرس اختصاصی خودشون باشن
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <button className="flex items-center gap-x-3 bg-[#4c20ff] p-3 text-white font-Yek-ExtraBold rounded-xl text-lg hover:ring-[7px] ring-[#b5a3ff] transition-all duration-300">
                  <h1>برگشت به صفحه خرید ارز</h1>
                </button>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="text-2xl font-Yek-ExtraBlack bg-[#ff00002d] px-3 py-1 text-red-600 rounded-xl flex items-center">
                  <h1>${listMaster[0]?.price}</h1>
                </div>
                <div>
                  <span className="w-5 h-5 bg-red-500 rounded-full dateDelay block"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 flex gap-x-4">
        <div>
          <div
            className={
              openSection
                ? 'shadow-sm bg-white h-auto w-[850px] rounded-xl p-9 overflow-hidden relative transition-all duration-300'
                : 'shadow-sm bg-white h-[350px] w-[850px] rounded-xl p-9 overflow-hidden relative transition-all duration-300'
            }
          >
            <div className="flex items-center gap-x-2">
              <p className="w-2 h-2 bg-[#4c20ff] rounded-full"></p>
              <h1 className="text-2xl font-Yek-ExtraBlack text-[#4c20ff]">
                توضیحات
              </h1>
            </div>
            <div className="mt-4">
              <span className="leading-7 text-[15px] font-Yek-Regular">
                مسیر پیشرفت ارزهای دیجیتال بکنیم ، ایمان خواهیم آورد که دنیا در
                حال تغییر است. به سال 1390 می رویم تمامی افراد بزرگ میگفتند کسی
                از بیت کوین استفاده نخواهد کرد و این سیستم از ریشه شکست خورده
                است ، در کمتر از 1 سال بیان کردن فقط متخصصین کامپیوتر به دلیل
                پیچیدگی های موجود از بیت کوین استفاده میکنند ، بین سال های 1393
                تا 1395 که جامع ارزهای دیجیتال بزرگتر شده بود در مورد اینکه
                ارزهای دیجیتال توسط دزدان ، پولشویان و قماربازان استفاده می شود
                موضع گرفتن ، سال 1397 بیان کردن که فقط درصد کمی از مردم از بیت
                کوین و اتریوم استفاده میکنند 😁 ، بزرگان اقتصاد و کسانی که خود
                را نابغه می دانستند سال 1399 با دلی آکنده از درد بیان میکردن که
                فقط کمپانی های کوچک از رمز ارزها استفاده میکنند و با گذشت چند
                هفته و پذیرفته شدن ارزهای دیجیتال همچون دوج کوین توسط تسلا و
                دیگر شرکت های بزرگ مشخص شد فقط شرکت های کوچک نیستند که از رمز
                ارزها استفاده میکنند ، و بلاخره در سال 1400 با چشمانی پر از اشک
                رو به دوربین گفتند ، فقط کشورهای کوچک همچون کشور السالوادور در
                امریکای مرکزی از ارزهای دیجیتال استفاده می کنند ، کافی نیست ؟
                بازهم نیاز به زمان هست تا باور کنید سرمایه گذاری روی رمزارزها از
                مهمترین فرصت هایی است که اکنون می توانید انجام دهید . یکی از
                بزرگترین منتقدان بیت کوین از ابتدا وارن بافت بود که در سال 1400
                تسلیم شد و یکی از شرکت های که زیرساخت ارزهای دیجیتال را توسعه
                میداد را خریداری کرد . به ما اجازه دهید تا ادامه این داستان را
                در سال 1408 برای شما بیان کنیم ، آنها خواهند گفت متاسفانه دیگر
                هیچ شخصی روی زمین رضایتی برای استفاده از بانک ها با چنین زیرساخت
                فرسوده و کندی ندارد ، نظام بانکی با شکست روبه رو شده و مردم می
                توانند به صورت آزادانه و بدون هیچ محدودیتی با ارزهای دیجیتال با
                یک دیگر در تمامی دنیا در تعامل باشند .
              </span>
            </div>
            {openSection ? (
              ''
            ) : (
              <div className="lowerBG h-32 absolute bottom-0 w-full z-0"></div>
            )}
            <div className="my-4">
              {openSection ? (
                <button
                  className="bg-[#4c20ff] z-10 absolute bottom-1 right-[350px] p-2 rounded-xl text-md font-Yek-ExtraBold hover:ring-[4px] ring-[#b5a3ff] transition-all duration-300 text-white"
                  onClick={() => setOpenSection(!openSection)}
                >
                  مشاهده کمتر-
                </button>
              ) : (
                <button
                  className="bg-[#4c20ff] z-10 absolute bottom-1 right-[350px] p-2 rounded-xl text-md font-Yek-ExtraBold hover:ring-[4px] ring-[#b5a3ff] transition-all duration-300 text-white"
                  onClick={() => setOpenSection(!openSection)}
                >
                  مشاهده بیشتر+
                </button>
              )}
            </div>
          </div>
          <div className="shadow-sm bg-white h-auto mt-8 rounded-xl p-9">
            <div className="flex items-center gap-x-2">
              <p className="w-2 h-2 bg-[#4c20ff] rounded-full"></p>
              <h1 className="text-2xl font-Yek-ExtraBlack text-[#4c20ff]">
                سوالات متداول
              </h1>
            </div>
            <div className="flex flex-col mt-8 space-y-4">
              <div
                className={
                  accordion === 1
                    ? 'w-full h-48 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden'
                    : 'w-full h-16 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden'
                }
                onClick={() => {
                  accordion !== 1 ? setAccordion(1) : setAccordion(0)
                }}
              >
                <div className="flex justify-between items-center px-4 pt-4">
                  <div className="text-lg font-Yek-SemiBold text-gray-700">
                    <h1>معرفی اولین سامانه ایرانی نگهداری ارزهای دیجیتال ؟ </h1>
                  </div>
                  <div className="flex items-center">
                    <button
                      className={
                        accordion === 1
                          ? '-rotate-90 transition-all duration-300'
                          : 'rotate-0 transition-all duration-300'
                      }
                    >
                      <svg
                        viewBox="0 0 26 30"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 transition-all  w-5 h-5"
                        fill="currentColor"
                      >
                        <path
                          d="M1.423 12.1725C1.5643 12.0275 2.0977 11.4075 2.5945 10.8975C5.5073 7.69 13.1059 2.44 17.0831 0.8375C17.687 0.58 19.2141 0.035 20.03 0C20.8117 0 21.557 0.18 22.2681 0.545C23.1547 1.055 23.8658 1.8575 24.2555 2.805C24.5063 3.4625 24.896 5.43 24.896 5.465C25.2857 7.6175 25.5 11.115 25.5 14.98C25.5 18.6625 25.2857 22.0175 24.9666 24.2025C24.9301 24.2375 24.5404 26.6825 24.1142 27.52C23.3324 29.05 21.8054 30 20.1712 30H20.03C18.9657 29.9625 16.7275 29.0125 16.7275 28.9775C12.9647 27.3725 5.5414 22.38 2.558 19.0625C2.558 19.0625 1.7177 18.21 1.3524 17.6775C0.782502 16.9125 0.500002 15.965 0.500002 15.0175C0.500002 13.96 0.819002 12.975 1.423 12.1725Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  className={
                    accordion === 1
                      ? 'py-4 px-6 text-md font-Yek-Light block opacity-100 '
                      : 'py-4 px-6 text-md font-Yek-Light none opacity-100'
                  }
                >
                  <div className="text-justify font-Yek-Bold text-gray-700 transition-all duration-300">
                    {accordion === 1 && <hr />}
                    <span
                      className={
                        accordion === 1
                          ? 'transition-all duration-300 block pt-4'
                          : 'transition-all duration-300 hidden'
                      }
                    >
                      کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ
                      کشور است که با سبک و استانداردهای جدید، سرویس های نگهداری
                      رمز ارزهای الکترونیک را برای افراد حقیقی و حقوقی اماده
                      کرده است. ما هر روزه، هزاران تراکنش واریزی و دریافتی را در
                      بستر کیف پول من ، بدون کوچکترین خطایی به گردش در می آوریم،
                      با این هدف که در افزایش سهم تجارت الکترونیکی در تولید
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={
                  accordion === 2
                    ? 'w-full h-48 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden'
                    : 'w-full h-16 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden'
                }
                onClick={() => {
                  accordion !== 2 ? setAccordion(2) : setAccordion(0)
                }}
              >
                <div className="flex justify-between items-center px-4 pt-4">
                  <div className="text-lg font-Yek-SemiBold text-gray-700">
                    <h1>معرفی اولین سامانه ایرانی نگهداری ارزهای دیجیتال ؟ </h1>
                  </div>
                  <div className="flex items-center">
                    <button
                      className={
                        accordion === 2
                          ? '-rotate-90 transition-all duration-300'
                          : 'rotate-0 transition-all duration-300'
                      }
                    >
                      <svg
                        viewBox="0 0 26 30"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 transition-all  w-5 h-5"
                        fill="currentColor"
                      >
                        <path
                          d="M1.423 12.1725C1.5643 12.0275 2.0977 11.4075 2.5945 10.8975C5.5073 7.69 13.1059 2.44 17.0831 0.8375C17.687 0.58 19.2141 0.035 20.03 0C20.8117 0 21.557 0.18 22.2681 0.545C23.1547 1.055 23.8658 1.8575 24.2555 2.805C24.5063 3.4625 24.896 5.43 24.896 5.465C25.2857 7.6175 25.5 11.115 25.5 14.98C25.5 18.6625 25.2857 22.0175 24.9666 24.2025C24.9301 24.2375 24.5404 26.6825 24.1142 27.52C23.3324 29.05 21.8054 30 20.1712 30H20.03C18.9657 29.9625 16.7275 29.0125 16.7275 28.9775C12.9647 27.3725 5.5414 22.38 2.558 19.0625C2.558 19.0625 1.7177 18.21 1.3524 17.6775C0.782502 16.9125 0.500002 15.965 0.500002 15.0175C0.500002 13.96 0.819002 12.975 1.423 12.1725Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  className={
                    accordion === 2
                      ? 'py-4 px-6 text-md font-Yek-Light block opacity-100 '
                      : 'py-4 px-6 text-md font-Yek-Light none opacity-100'
                  }
                >
                  <div className="text-justify font-Yek-Bold text-gray-700 transition-all duration-300">
                    {accordion === 2 && <hr />}
                    <span
                      className={
                        accordion === 2
                          ? 'transition-all duration-300 block pt-4'
                          : 'transition-all duration-300 hidden'
                      }
                    >
                      کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ
                      کشور است که با سبک و استانداردهای جدید، سرویس های نگهداری
                      رمز ارزهای الکترونیک را برای افراد حقیقی و حقوقی اماده
                      کرده است. ما هر روزه، هزاران تراکنش واریزی و دریافتی را در
                      بستر کیف پول من ، بدون کوچکترین خطایی به گردش در می آوریم،
                      با این هدف که در افزایش سهم تجارت الکترونیکی در تولید
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={
                  accordion === 3
                    ? 'w-full h-48 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden'
                    : 'w-full h-16 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden'
                }
                onClick={() => {
                  accordion !== 3 ? setAccordion(3) : setAccordion(0)
                }}
              >
                <div className="flex justify-between items-center px-4 pt-4">
                  <div className="text-lg font-Yek-SemiBold text-gray-700">
                    <h1>معرفی اولین سامانه ایرانی نگهداری ارزهای دیجیتال ؟ </h1>
                  </div>
                  <div className="flex items-center">
                    <button
                      className={
                        accordion === 3
                          ? '-rotate-90 transition-all duration-300'
                          : 'rotate-0 transition-all duration-300'
                      }
                    >
                      <svg
                        viewBox="0 0 26 30"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 transition-all  w-5 h-5"
                        fill="currentColor"
                      >
                        <path
                          d="M1.423 12.1725C1.5643 12.0275 2.0977 11.4075 2.5945 10.8975C5.5073 7.69 13.1059 2.44 17.0831 0.8375C17.687 0.58 19.2141 0.035 20.03 0C20.8117 0 21.557 0.18 22.2681 0.545C23.1547 1.055 23.8658 1.8575 24.2555 2.805C24.5063 3.4625 24.896 5.43 24.896 5.465C25.2857 7.6175 25.5 11.115 25.5 14.98C25.5 18.6625 25.2857 22.0175 24.9666 24.2025C24.9301 24.2375 24.5404 26.6825 24.1142 27.52C23.3324 29.05 21.8054 30 20.1712 30H20.03C18.9657 29.9625 16.7275 29.0125 16.7275 28.9775C12.9647 27.3725 5.5414 22.38 2.558 19.0625C2.558 19.0625 1.7177 18.21 1.3524 17.6775C0.782502 16.9125 0.500002 15.965 0.500002 15.0175C0.500002 13.96 0.819002 12.975 1.423 12.1725Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  className={
                    accordion === 3
                      ? 'py-4 px-6 text-md font-Yek-Light block opacity-100 '
                      : 'py-4 px-6 text-md font-Yek-Light none opacity-100'
                  }
                >
                  <div className="text-justify font-Yek-Bold text-gray-700 transition-all duration-300">
                    {accordion === 3 && <hr />}
                    <span
                      className={
                        accordion === 3
                          ? 'transition-all duration-300 block pt-4'
                          : 'transition-all duration-300 hidden'
                      }
                    >
                      کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ
                      کشور است که با سبک و استانداردهای جدید، سرویس های نگهداری
                      رمز ارزهای الکترونیک را برای افراد حقیقی و حقوقی اماده
                      کرده است. ما هر روزه، هزاران تراکنش واریزی و دریافتی را در
                      بستر کیف پول من ، بدون کوچکترین خطایی به گردش در می آوریم،
                      با این هدف که در افزایش سهم تجارت الکترونیکی در تولید
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-sm bg-white h-auto mt-8 rounded-xl p-9">
            <div className="flex items-center gap-x-2">
              <p className="w-2 h-2 bg-[#4c20ff] rounded-full"></p>
              <h1 className="text-2xl font-Yek-ExtraBlack text-[#4c20ff]">
                دیدگاه و پرسش ها
              </h1>
            </div>
            {listComments.length > 0 ? (
              listComments.map((item: commentsTypes) => {
                const {
                  id,
                  user: { full_name },
                  body,
                } = item
                return (
                  <div className="mt-4 bg-gray-100 rounded-xl" key={id}>
                    <div className="p-4">
                      <div className="flex gap-x-3 items-center">
                        <div className="flex items-center justify-center font-Yek-ExtraBlack text-xl">
                          <h1 className="bg-gray-300 rounded-full py-3 px-5">
                            {full_name.slice(0, 1)}
                          </h1>
                        </div>
                        <div className="text-lg font-Yek-ExtraBold text-gray-700">
                          <h1>{full_name}</h1>
                        </div>
                      </div>
                      <div className="bg-white mt-4 rounded-xl p-4 space-y-4">
                        <div>
                          <h1 className="text-md font-Yek-Bold">متن کامنت:</h1>
                        </div>
                        <div className="text-lg font-Yek-Bold">
                          <span>{body}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="mt-8 flex flex-col items-center space-y-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 transition-colors text-gray-600"
                    fill="currentColor"
                  >
                    <path d="M2.978 8.358l-2.978-2.618 8.707-4.74 3.341 2.345 3.21-2.345 8.742 4.639-3.014 2.68.014.008 3 4.115-3 1.634v4.122l-9 4.802-9-4.802v-4.115l1 .544v2.971l7.501 4.002v-7.889l-2.501 3.634-9-4.893 2.978-4.094zm9.523 5.366v7.875l7.499-4.001v-2.977l-5 2.724-2.499-3.621zm-11.022-1.606l7.208 3.918 1.847-2.684-7.231-3.742-1.824 2.508zm11.989 1.247l1.844 2.671 7.208-3.927-1.822-2.498-7.23 3.754zm-9.477-4.525l8.01-4.43 7.999 4.437-7.971 4.153-8.038-4.16zm-2.256-2.906l2.106 1.851 7.16-3.953-2.361-1.657-6.905 3.759zm11.273-2.052l7.076 3.901 2.176-1.935-6.918-3.671-2.334 1.705z"></path>{' '}
                  </svg>
                </div>
                <div className="text-lg font-Yek-Regular text-gray-500">
                  <h1>هیج کامنتی ثبت نشده است...</h1>
                </div>
              </div>
            )}
            <div className="flex items-center gap-x-2 mt-4">
              <p className="w-2 h-2 bg-[#4c20ff] rounded-full"></p>
              <h1 className="text-2xl font-Yek-ExtraBlack text-[#4c20ff]">
                ثبت نظر جدید
              </h1>
            </div>
            <div className="mt-8">
              <form onSubmit={sendComments}>
                <div className="flex flex-col">
                  <label
                    htmlFor="details"
                    className="text-xl mb-4 font-Yek-ExtraBold"
                  >
                    متن کامنت
                    <span className="text-xl text-red-600 font-Yek-ExtraBlack">
                      *
                    </span>
                  </label>
                  <input
                    name="details"
                    id="details"
                    value={body}
                    onChange={commentsChangeHnadler}
                    placeholder="نظر خود را وارد کنید..."
                    className="w-[780px] bg-gray-100 outline-none resize-none p-2 pb-24 rounded-xl text-gray-800 font-Yek-Regular"
                  />
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <button className="text-lg font-Yek-ExtraBold text-white bg-[#4c20ff] p-3 rounded-xl transition-all duration-300 hover:ring-[6px] ring-[#b5a3ff]">
                    ارسال کامنت
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mr-6">
          <div className="flex gap-x-9">
            <div className="shadow-sm bg-white w-[200px] h-auto rounded-xl flex flex-col items-center py-6 space-y-6">
              <BiSolidBadgeDollar color="#4c20ff" size={60} />
              <h1 className="text-xl font-Yek-ExtraBlack ">
                {listMaster[0]?.title}
              </h1>
            </div>
            <div className="shadow-sm bg-white w-[200px] h-auto rounded-xl flex flex-col items-center py-6 space-y-6">
              <BiSolidOffer color="#4c20ff" size={60} />
              <h1 className="text-xl font-Yek-ExtraBlack ">
                {numberConvertToPersian(20)}درصد تخفیف
              </h1>
            </div>
          </div>
          <div className="flex gap-x-9 mt-8">
            <div className="shadow-sm bg-white w-[200px] h-auto rounded-xl flex flex-col items-center py-6 space-y-6">
              <GiMoneyStack color="#4c20ff" size={60} />
              <h1 className="text-xl font-Yek-ExtraBlack ">
                ${listMaster[0]?.price}
              </h1>
            </div>
            <div className="shadow-sm bg-white w-[200px] h-auto rounded-xl flex flex-col items-center py-6 space-y-6">
              <BiSolidCategory color="#4c20ff" size={60} />
              <h1 className="text-xl font-Yek-ExtraBlack ">
                {listMaster[0]?.country} - مسترکارت
              </h1>
            </div>
          </div>
          <div className="shadow-sm bg-white h-56 rounded-xl mt-8">
            <div className="flex items-center justify-center pt-8">
              <button className="bg-gray-200 p-4 rounded-full">
                <LuUser2 color="#333" size={50} />
              </button>
            </div>
            <div className="flex items-center gap-x-2 justify-center mt-4">
              <h1 className="text-xl text-gray-800 font-Yek-ExtraBold">
                محمد سیف الهی
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#b5a3ff]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                ></path>
              </svg>
            </div>
            <div className="flex gap-x-1 justify-center mt-8">
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
              <FaStar color="orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsMasterCart
