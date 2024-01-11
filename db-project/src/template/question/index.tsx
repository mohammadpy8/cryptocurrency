import { FC, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const Question: FC = () => {
  const [accordion, setAccordion] = useState<number>(0)

  return (
    <div className="mb-28">
      <div className="mt-32 flex justify-center font-Yek-ExtraBlack text-4xl text-primary-300">
        <h1>سوالات متداول</h1>
      </div>
      <div className="flex justify-center text-lg mt-4 font-Yek-Regular text-gray-700">
        <span>لیستی از پرسش و پاسخ‌های که شاید با آن مواجه شوید</span>
      </div>
      <div className="mt-12 px-40 flex flex-col gap-y-8">
        <div
          className={
            accordion === 1
              ? 'w-full h-48 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden shadow-sm'
              : 'w-full h-16 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden shadow-sm'
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
                کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ کشور
                است که با سبک و استانداردهای جدید، سرویس های نگهداری رمز ارزهای
                الکترونیک را برای افراد حقیقی و حقوقی اماده کرده است. ما هر
                روزه، هزاران تراکنش واریزی و دریافتی را در بستر کیف پول من ،
                بدون کوچکترین خطایی به گردش در می آوریم، با این هدف که در افزایش
                سهم تجارت الکترونیکی در تولید
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            accordion === 2
              ? 'w-full h-48 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden shadow-sm'
              : 'w-full h-16 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden shadow-sm'
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
                کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ کشور
                است که با سبک و استانداردهای جدید، سرویس های نگهداری رمز ارزهای
                الکترونیک را برای افراد حقیقی و حقوقی اماده کرده است. ما هر
                روزه، هزاران تراکنش واریزی و دریافتی را در بستر کیف پول من ،
                بدون کوچکترین خطایی به گردش در می آوریم، با این هدف که در افزایش
                سهم تجارت الکترونیکی در تولید
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            accordion === 3
              ? 'w-full h-48 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden shadow-sm'
              : 'w-full h-16 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden shadow-sm'
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
                کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ کشور
                است که با سبک و استانداردهای جدید، سرویس های نگهداری رمز ارزهای
                الکترونیک را برای افراد حقیقی و حقوقی اماده کرده است. ما هر
                روزه، هزاران تراکنش واریزی و دریافتی را در بستر کیف پول من ،
                بدون کوچکترین خطایی به گردش در می آوریم، با این هدف که در افزایش
                سهم تجارت الکترونیکی در تولید
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            accordion === 4
              ? 'w-full h-48 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden shadow-sm'
              : 'w-full h-16 bg-gray-100 rounded-xl transition-all duration-300 overflow-hidden shadow-sm'
          }
          onClick={() => {
            accordion !== 4 ? setAccordion(4) : setAccordion(0)
          }}
        >
          <div className="flex justify-between items-center px-4 pt-4">
            <div className="text-lg font-Yek-SemiBold text-gray-700">
              <h1>معرفی اولین سامانه ایرانی نگهداری ارزهای دیجیتال ؟ </h1>
            </div>
            <div className="flex items-center">
              <button
                className={
                  accordion === 4
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
              accordion === 4
                ? 'py-4 px-6 text-md font-Yek-Light block opacity-100 '
                : 'py-4 px-6 text-md font-Yek-Light none opacity-100'
            }
          >
            <div className="text-justify font-Yek-Bold text-gray-700 transition-all duration-300">
              {accordion === 4 && <hr />}
              <span
                className={
                  accordion === 4
                    ? 'transition-all duration-300 block pt-4'
                    : 'transition-all duration-300 hidden'
                }
              >
                کیف پول من ، اولین سامانه نگهداری ارزهای دیجیتال پیشگامِ کشور
                است که با سبک و استانداردهای جدید، سرویس های نگهداری رمز ارزهای
                الکترونیک را برای افراد حقیقی و حقوقی اماده کرده است. ما هر
                روزه، هزاران تراکنش واریزی و دریافتی را در بستر کیف پول من ،
                بدون کوچکترین خطایی به گردش در می آوریم، با این هدف که در افزایش
                سهم تجارت الکترونیکی در تولید
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
