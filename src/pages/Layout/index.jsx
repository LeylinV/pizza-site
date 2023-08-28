import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainFooter } from 'widgets/MainFooter';
import { TopHeader } from 'widgets/TopHeader';

const Layout = () => {
    return (
        <div className={'d-flex flex-column min-vh-100'}>
            <TopHeader />
            <div className={'flex-grow-1'}>
                <Outlet />
            </div>
            <MainFooter />
        </div>
    );
};

export { Layout };
