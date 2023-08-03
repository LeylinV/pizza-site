import React from 'react';
import {ProductCard} from "entities/ProductCard";
import {CustomButton} from "../../../../shared/ui/button";

const CategoryProduct = ({product}) => {
    return (
        <ProductCard product={product}>
            <CustomButton slot={'button'}>Текст</CustomButton>
        </ProductCard>
    );
};

export default CategoryProduct;