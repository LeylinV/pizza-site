import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryProduct from './CategoryProduct';

const Category = ({ category }) => {
    return (
        <Container>
            <h3
                className={'my-5'}
                id={category.name}
            >
                {category.title}{' '}
                {!category.isAvailable && (
                    <span className={'text-secondary fs-4'}>Скоро!</span>
                )}
            </h3>
            {category.isAvailable && (
                <Row>
                    {category.products.map((product) => {
                        return (
                            <Col
                                xs="12"
                                md="6"
                                lg="3"
                                className={'mb-3 mb-lg-0'}
                                key={product.name}
                            >
                                <CategoryProduct product={product} />
                            </Col>
                        );
                    })}
                </Row>
            )}
        </Container>
    );
};

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        isAvailable: PropTypes.bool,
        products: PropTypes.array,
    }),
};

export { Category };
