import SidebarHeader from './SidebarHeader'
import SidebarMenu from './SidebarMenu'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
        <SidebarHeader />
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <SidebarMenu />
        </div>        
    </aside>
  )
}

export default Sidebar
