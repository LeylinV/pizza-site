import PropTypes from 'prop-types';
import React from 'react';
import { CustomButton } from 'shared/ui/button';

const CardButton = ({ product }) => {
    return (
        <>
            {!product.isAvailable ? (
                <CustomButton
                    size="md"
                    disabled
                    variant="secondary"
                >
                    Позже
                </CustomButton>
            ) : product.price.fixed ? (
                <CustomButton size="md">В корзину</CustomButton>
            ) : (
                <CustomButton size="md">Выбрать</CustomButton>
            )}
        </>
    );
};

CardButton.propTypes = {
    product: PropTypes.shape({
        isAvailable: PropTypes.bool,
        price: PropTypes.shape({
            fixed: PropTypes.bool,
        }),
    }),
};

export { CardButton };
