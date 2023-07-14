import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from "../../widgets/TopHeader/model/TopHeader";

const Layout = () => {
    return (
        <>
            <TopHeader />
            <Outlet />
        </>
    );
};

export default Layout;