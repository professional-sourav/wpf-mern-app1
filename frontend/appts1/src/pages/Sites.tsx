import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import SiteItemGridView from '../components/SiteItemGridView'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSiteListing } from '../features/auth/siteSlice'

const Sites = () => {

  const { loading, success, data } = useSelector((state: any) => state.sites)
  const dispatch = useDispatch()

  useEffect(() => {
    const user: any = JSON.parse(localStorage.getItem('userInfo'))
    dispatch(getSiteListing(user.id as number))

  }, [])

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-bold text-black dark:text-white">
          Sites
        </h2>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        {
          loading
            ? <div>Loading...</div>
            : data.map((item: any) => <SiteItemGridView {...item} />)
        }
      </div>
    </>
  )
}

export default Sites