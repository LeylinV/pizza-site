import {Container} from "react-bootstrap";

import {CustomNavbar} from "shared/ui/navbar";
import {BasketButton} from "features/BasketButton";

import {getAnchors} from "../lib/getAnchors";

import {categories} from "../vars";
import {changeKeys} from "../lib/changeKeys";
import {useEffect, useState} from "react";

const StoreHeader = () => {
    const [categoriesWithAnchors, setCategoriesWithAnchors] = useState([])
    useEffect(()=>{
        setCategoriesWithAnchors(changeKeys(getAnchors(categories, 'value'), 'value'))
    },[])
    return (
        <Container className={'justify-content-between'}>
            <CustomNavbar navs={categoriesWithAnchors}/>
            <BasketButton/>
        </Container>
    );
};

export {StoreHeader};