import React from 'react'

const SiteItemGridView = ({ id, name, image }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center gap-3 py-5 px-6">
                <div className="h-10 w-10 rounded-full">
                    <img src="src/images/user/user-11.png" alt="User" />
                </div>
                <div>
                    <h4 className="font-medium text-black dark:text-white">
                        Naimur Rahman
                    </h4>
                    <p className="text-xs font-medium">Content Writer</p>
                </div>
            </div>

            <a href="#" className="block px-4">
                <img src={image ? image : ""} alt={name} />
            </a>

            <div className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                    <a href="#">{name}</a>
                </h4>
                <p className="font-medium">
                    Lorem ipsum dolor sit amet, vehiculaum ero felis loreum
                    fitiona fringilla goes scelerisque Interdum et.
                </p>
            </div>
        </div>
    )
}

export default SiteItemGridView