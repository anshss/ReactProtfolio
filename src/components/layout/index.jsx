import React from 'react';
import './index.scss'
import Sidebar from '../sidebar'
import {Outlet} from 'react-router-dom'

const Layout = () => {
return(
    <div className="layout">
    <Sidebar />
    <div className="page">
        {/* <span className="tags tag-1 top-tags">&lt;html&gt;</span> */}
        <br /> 
        <span className="tags tag-2 body-tags top-tags">&lt;body&gt;</span>
        <Outlet />

        <span className="tags tag-3 body-tags bottom-tags">&lt;/body&gt;</span>
        <br /> 
        <span className="tags tag-4 bottom-tags">&lt;/html&gt;</span>

    </div>
    </div>
)
}

export default Layout