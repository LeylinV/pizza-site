import {useState, useEffect} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";

const SwiperButton = ({direction = 'left'}) => {

    function takeButtonDirection() {
        if (direction === 'left') {
            return <FaChevronLeft/>
        }
        if (direction === 'right') {
            return <FaChevronRight/>
        }
    }
    return (
        <button className={`swiper-button-${direction}`}>
            {takeButtonDirection()}
        </button>
    )
}

export {SwiperButton};