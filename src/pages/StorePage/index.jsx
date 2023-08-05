import {BrandedHeader} from "widgets/BrandedHeader";
import {MainSwiper} from "widgets/MainSwiper";
import {StoreHeader} from "widgets/StoreHeader";

const StorePage = () => {
    return (
        <>
            <BrandedHeader/>
            <MainSwiper />
            <StoreHeader/>
        </>
    );
};

export {StorePage};