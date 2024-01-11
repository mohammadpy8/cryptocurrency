import { FC, useEffect } from 'react'
import styles from './Pagination.module.css'

interface pagination {
  page: number
  setPage: any
}

const Pagination: FC<pagination> = ({ page, setPage }) => {
  useEffect(() => {
    window.scrollTo({
      top: 150,
      behavior: 'smooth',
    })
  }, [page])
  const previousHandle = () => {
    if (page <= 1) return
    setPage((page: number) => page - 1)
  }

  const nextHandle = () => {
    if (page >= 10) return
    setPage((page: number) => page + 1)
  }
  return (
    <div className={`${styles.pagination} text-xl font-Yek-Bold`}>
      <button
        onClick={previousHandle}
        className={page === 1 ? styles.disabled : null}
      >
        صفحه قبلی
      </button>
      <p className={page === 1 ? styles.selected : null}>1</p>
      <p className={page === 2 ? styles.selected : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span className="text-[#3874ff]">...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span className="text-[#3874ff]">...</span>
      <p className={page === 9 ? styles.selected : null}>9</p>
      <p className={page === 10 ? styles.selected : null}>10</p>
      <button
        onClick={nextHandle}
        className={page === 10 ? styles.disabled : null}
      >
        صفحه بعدی
      </button>
    </div>
  )
}

export default Pagination
