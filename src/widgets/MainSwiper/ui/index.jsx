import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';
import { images } from '../vars';

import './index.scss';

register();

const MainSwiper = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        const swiperEl = swiperElRef.current;

        const swiperParams = {
            pagination: {
                enable: true,
                clickable: true,
            },
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            grabCursor: true,
            autoplay: {
                delay: 5000,
                pauseOnMouseEnter: true,
            },
        };

        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);

        // and now initialize it
        swiperEl.initialize();
    });

    return (
        <swiper-container
            init="false"
            ref={swiperElRef}
            class={'py-4'}
        >
            {images.map((item, index) => {
                return (
                    <swiper-slide key={index}>
                        <picture>
                            <source
                                type={'image/webp'}
                                srcSet={item.webp}
                            />
                            <img
                                alt="banner"
                                src={item.jpg}
                            />
                        </picture>
                    </swiper-slide>
                );
            })}
        </swiper-container>
    );
};

export { MainSwiper };
