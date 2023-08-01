import {useState, useEffect} from "react";

import {Swiper} from "features/swiper";
import {Pagination} from "features/pagination";

const MainSwiper = () => {
    const [] = useState();

    return (
        <div>
            <Swiper />
            <Pagination />
        </div>
    )
}

export {MainSwiper};