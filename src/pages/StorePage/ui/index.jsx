import {BrandedHeader} from "widgets/BrandedHeader";
import {StoreHeader} from "widgets/StoreHeader";
import {categories} from "../vars";
import {Category} from "widgets/Category";

const StorePage = () => {
    return (
        <>
            <BrandedHeader/>
            <StoreHeader/>
            {categories.map(category => <Category category={category} key={category.name}/>)}
        </>
    );
};

export {StorePage};