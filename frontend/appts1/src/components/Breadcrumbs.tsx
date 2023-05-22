import React from 'react'

const Breadcrumbs = () => {
    return (
        <nav>
            <ol className="flex items-center gap-2">
                <li>
                    <a className="font-medium" href="index.html">Dashboard /</a>
                </li>
                <li className="font-medium text-primary">Cards</li>
            </ol>
        </nav>
    )
}

export default Breadcrumbs