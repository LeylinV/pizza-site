import { useState, useEffect, useRef } from 'react';

function useSticky() {
    const [isSticky, setIsSticky] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const shouldBeSticky = !rect.top;
                if (shouldBeSticky !== isSticky) {
                    setIsSticky(shouldBeSticky);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, [isSticky]);

    return [ref, isSticky];
}

export { useSticky };
