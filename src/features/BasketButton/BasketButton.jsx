import React from 'react';
import CustomButton from "../../shared/ui/button/CustomButton";

const BasketButton = ({...props}) => {
    return (
        <CustomButton {...props}>Корзина</CustomButton>
    );
};

export default BasketButton;