import React from 'react';
import {ProductCard} from "entities/ProductCard";
import {CardButton} from "features/CardButton";

const CategoryProduct = ({product}) => {
    return (
        <ProductCard
            product={product}
            cardFeature={<CardButton product={product}/>}
        />
    );
};

export default CategoryProduct;