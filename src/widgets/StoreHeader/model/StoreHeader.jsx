import React from 'react';
import {Container} from "react-bootstrap";
import CustomNavbar from "../../../shared/ui/navbar/CustomNavbar";
import BasketButton from "../../../features/BasketButton/BasketButton";
import {categories} from "../vars";
import {getAnchors} from "../utils/getAnchors";

const StoreHeader = () => {
    const categoriesWithAnchors = getAnchors(categories, 'value')
    console.log(categoriesWithAnchors)
    return (
        <Container className={'justify-content-between'}>
            <CustomNavbar navs={categoriesWithAnchors}/>
            <BasketButton/>
        </Container>
    );
};

export default StoreHeader;