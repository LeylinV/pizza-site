import React from 'react';
import { Loader } from 'shared/ui/loader/index.jsx';
import style from './index.module.scss';

const PageLoader = () => {
    return (
        <div className={style['page-loader']}>
            <Loader />
        </div>
    );
};

export { PageLoader };
