import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import SiteItemGridView from '../components/SiteItemGridView'

const Sites = () => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-bold text-black dark:text-white">
          Sites
        </h2>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        <SiteItemGridView />
      </div>
    </>
  )
}

export default Sites