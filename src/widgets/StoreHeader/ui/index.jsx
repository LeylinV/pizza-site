import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BasketButton } from 'features/BasketButton';
import { CustomNavbar } from 'shared/ui/navbar';
import { changeKeys } from '../lib/helpers/changeKeys';
import { getAnchors } from '../lib/helpers/getAnchors';
import { useSticky } from '../lib/hooks/useSticky';
import { categories } from '../vars';

const StoreHeader = () => {
    const [categoriesWithAnchors, setCategoriesWithAnchors] = useState([]);
    const [ref, isSticky] = useSticky();
    useEffect(() => {
        setCategoriesWithAnchors(
            changeKeys(getAnchors(categories, 'value'), 'value'),
        );
    }, []);
    return (
        <div
            ref={ref}
            className={`position-sticky top-0 z-1 py-2 bg-white ${
                isSticky && 'shadow'
            }`}
        >
            <Container>
                <Row className={'justify-content-between'}>
                    <Col xs="auto">
                        <CustomNavbar navs={categoriesWithAnchors} />
                    </Col>
                    <Col xs="auto">
                        <BasketButton />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export { StoreHeader };
