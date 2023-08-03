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
                    <Col xs='auto'>
                        {category.products.map((product, index) => {
                            return <CategoryProduct product={product} key={product.name} />
                        })}
                    </Col>
                </Row>
            }
        </Container>
    );
};

export {Category};