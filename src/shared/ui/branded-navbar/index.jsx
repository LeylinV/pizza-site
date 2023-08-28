import PropTypes from 'prop-types';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from './BrandedNavbar.module.scss';

const BrandedNavbar = ({ brandName, brandHref }) => {
    const navigate = useNavigate();

    return (
        <Navbar
            bg="white"
            expand="lg"
        >
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand
                        href="#home"
                        className="d-flex justify-content-center"
                    >
                        <img
                            alt={brandName}
                            src={brandHref}
                            className={`d-inline-block align-top ${style['brand-logo']}`}
                        />{' '}
                        <span className={style['brand-text']}>{brandName}</span>
                    </Navbar.Brand>
                </LinkContainer>
                <Nav
                    className="d-flex my-2 my-lg-0"
                    onSelect={(selectedKey) => navigate(selectedKey)}
                >
                    <Nav.Link href="/profile">Кабинет</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

BrandedNavbar.propTypes = {
    brandName: PropTypes.string,
    brandHref: PropTypes.string,
};

export { BrandedNavbar };
