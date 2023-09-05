import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainFooter } from 'widgets/MainFooter';
import { PageLoader } from 'widgets/page-loader/index.jsx';
import { TopHeader } from 'widgets/TopHeader';

const Layout = () => {
    return (
        <div className={'d-flex flex-column min-vh-100'}>
            <TopHeader />
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
            <MainFooter />
        </div>
    );
};

export { Layout };
