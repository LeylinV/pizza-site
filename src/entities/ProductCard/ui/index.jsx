import PropTypes from 'prop-types';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { connectIngredients } from '../lib/connectIngredients';
import { getPrice } from '../lib/getPrice';

const ProductCard = ({ product, cardFeature }) => {
    return (
        <Card className={'h-100 position-relative'}>
            <Card.Img
                variant="top"
                src={product?.img ? product?.img : 'http://dummyimage.com/1024'}
            />
            <Card.Body className={'d-flex flex-column justify-content-between'}>
                <div>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="fs-6 text-secondary">
                        {product?.description
                            ? product.description
                            : connectIngredients(product?.ingredients)}
                    </Card.Text>
                </div>
                <Row className={'justify-content-between pt-4'}>
                    <Col
                        xs={'auto'}
                        className={'fs-5 fw-medium'}
                    >
                        {getPrice(product.price)}
                    </Col>
                    <Col xs={'auto'}>{cardFeature}</Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        ingredients: PropTypes.array,
        price: PropTypes.shape({
            fixed: PropTypes.bool,
            number: PropTypes.number,
        }),
        img: PropTypes.string,
    }),
    cardFeature: PropTypes.element,
};

export { ProductCard };
