import {useState, useEffect} from "react";

import {SwiperButton} from "shared/ui/swiper-button";
import {SwiperButton} from "shared/ui/swiper-button";

import {SwiperItem} from "./swiper-item";

const Swiper = () => {
    const [] = useState();

    return (
        <div>
            <SwiperButton /> // left
            <SwiperButton /> // right
            <div className={}>
                <SwiperItem />
            </div>
        </div>
    )
}

export {Swiper};