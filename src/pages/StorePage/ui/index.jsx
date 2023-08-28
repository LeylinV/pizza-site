import React from 'react';
import { BrandedHeader } from 'widgets/BrandedHeader';
import { Category } from 'widgets/Category';
import { MainSwiper } from 'widgets/MainSwiper';
import { StoreHeader } from 'widgets/StoreHeader';
import { categories } from '../vars';

const StorePage = () => {
    return (
        <>
            <BrandedHeader />
            <MainSwiper />
            <StoreHeader />
            {categories.map((category) => (
                <Category
                    category={category}
                    key={category.name}
                />
            ))}
        </>
    );
};

export { StorePage };
