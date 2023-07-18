import {Outlet} from 'react-router-dom';
import {TopHeader} from "widgets/TopHeader"

const Layout = () => {
    return (
        <>
            <TopHeader/>
            <Outlet/>
        </>
    );
};

export {Layout};