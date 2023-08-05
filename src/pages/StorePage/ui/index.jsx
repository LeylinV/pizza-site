import {BrandedHeader} from "widgets/BrandedHeader";
import {MainSwiper} from "widgets/MainSwiper";
import {StoreHeader} from "widgets/StoreHeader";
import {categories} from "../vars";
import {Category} from "widgets/Category";

const StorePage = () => {
    return (
        <>
            <BrandedHeader/>
            <MainSwiper />
            <StoreHeader/>
            {categories.map(category => <Category category={category} key={category.name}/>)}
        </>
    );
};

export {StorePage};