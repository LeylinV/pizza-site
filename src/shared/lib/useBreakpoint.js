/**
 * @author Junaid Atari
 * @link https://github.com/blacksmoke26
 * @since 2020-09-20
 */

// npm i -S debounce

import debounce from 'debounce';
import { useState, useEffect } from 'react';

/**
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} Breakpoint
 */

export const SIZE_XS = 'xs';
export const SIZE_SM = 'sm';
export const SIZE_MD = 'md';
export const SIZE_LG = 'lg';
export const SIZE_XL = 'xl';
export const SIZE_XXL = 'xxl';

/**
 * @param {number} width
 * @returns {Breakpoint}
 */
const resolveBreakpoint = (width) => {
    if (width < 576) {
        return SIZE_XS;
    } else if (width >= 576 && width < 768) {
        return SIZE_SM;
    } else if (width >= 768 && width < 992) {
        return SIZE_MD;
    } else if (width >= 992 && width < 1200) {
        return SIZE_LG;
    } else if (width >= 1200 && width < 1440) {
        return SIZE_XL;
    } else if (width >= 1440) {
        return SIZE_XXL;
    }
};

/**
 * @returns {Breakpoint}
 */
const useBreakpoint = () => {
    const [size, setSize] = useState(() =>
        resolveBreakpoint(window.innerWidth),
    );

    useEffect(() => {
        const calcInnerWidth = debounce(function () {
            setSize(resolveBreakpoint(window.innerWidth));
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return size;
};

export default useBreakpoint;
