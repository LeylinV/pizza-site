import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryProduct from "./CategoryProduct";

const Category = ({category}) => {
    return (
        <Container>
            <h3 className={'my-5'} id={category.name}>{category.title} {!category.isAvailable && <span className={'text-secondary fs-4'}>Скоро!</span>}</h3>
            { category.isAvailable
                &&
                <Row>
                    {category.products.map((product, index) => {
                        return <Col
                            xs='12'
                            md='6'
                            lg='3'
                            className={'mb-3 mb-lg-0'}
                        >
                            <CategoryProduct
                                product={product}
                                key={product.name} />
                        </Col>
                    })}
                </Row>
            }
        </Container>
    );
};

export {Category};