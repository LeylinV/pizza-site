import {useState, useEffect} from "react";

import './index.scss';

const SwiperItem = ({imageSrc}) => {

    return (
        <div className={'swiper-item'}>
            <picture className={'swiper-img'} draggable={false}>
                <source type={'image/webp'} srcSet={imageSrc.webp}/>
                <img alt="banner" src={imageSrc.jpg}/>
            </picture>
        </div>
    )
}

export {SwiperItem};