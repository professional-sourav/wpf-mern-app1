import PageContentHeader from './Header/PageContentHeader'
import {Outlet} from 'react-router-dom'

const PageContent = () => {
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <PageContentHeader />
        <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
        </main>
    </div>    
  )
}

export default PageContent