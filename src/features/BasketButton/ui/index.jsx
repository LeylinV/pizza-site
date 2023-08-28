import React from 'react';
import { CustomButton } from 'shared/ui/button';

const BasketButton = ({ ...props }) => {
    return <CustomButton {...props}>Корзина</CustomButton>;
};

export { BasketButton };
