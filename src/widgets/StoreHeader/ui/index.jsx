import {Container} from "react-bootstrap";

import {CustomNavbar} from "shared/ui/navbar";
import {BasketButton} from "features/BasketButton";

import {getAnchors} from "../lib/getAnchors";

import {categories} from "../vars";

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

export {StoreHeader};