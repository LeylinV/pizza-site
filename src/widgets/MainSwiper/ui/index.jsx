import {useState, useEffect} from "react";

import {Swiper} from "features/swiper";
import {Pagination} from "features/pagination";

import {images} from '../vars';

const MainSwiper = () => {

    return (
        <div className={'swiper'} style={{width: '800px',   maxWidth: '100%', margin: '0 auto', padding: '20px 15px'}}>
            <Swiper items={images}/>
            <Pagination />
        </div>
    )
}

export {MainSwiper};