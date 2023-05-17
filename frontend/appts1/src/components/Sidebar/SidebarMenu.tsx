import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'

const SidebarMenu = () => {
  return (
    <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
        <div>
            <h3 className="mb-4 ml-4 text-sm font-medium text-bodydark2">MENU</h3>
            <ul className="mb-6 flex flex-col gap-1.5">
                <SidebarMenuItem />
            </ul>
        </div>
    </nav>
  )
}

export default SidebarMenu
