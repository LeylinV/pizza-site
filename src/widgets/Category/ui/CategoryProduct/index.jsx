import PropTypes from 'prop-types';
import React from 'react';
import { CardButton } from 'features/CardButton';
import { ProductCard } from 'entities/ProductCard';

const CategoryProduct = ({ product }) => {
    return (
        <ProductCard
            product={product}
            cardFeature={<CardButton product={product} />}
        />
    );
};

CategoryProduct.propTypes = {
    product: PropTypes.object,
};

export default CategoryProduct;
