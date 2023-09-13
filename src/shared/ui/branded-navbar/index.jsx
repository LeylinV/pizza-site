import PropTypes from 'prop-types';
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBreakpoint from '../../lib/useBreakpoint.js';
import style from './BrandedNavbar.module.scss';

const BrandedNavbar = ({ brandName, brandHref, navItems }) => {
    const navigate = useNavigate();
    const breakpoint = useBreakpoint();
    let breakpoint_flag = false;
    if (breakpoint !== 'lg' && breakpoint !== 'xl' && breakpoint !== 'xxl') {
        breakpoint_flag = true;
    }

    return (
        <Navbar expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">
                        <img
                            alt={brandName}
                            src={brandHref}
                            className={`d-inline-block align-top ${style['brand-logo']}`}
                        />{' '}
                        <span className={style['brand-text']}>{brandName}</span>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Offcanvas
                    id="responsive-navbar-nav"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header
                        closeButton
                        className={'border-bottom'}
                    >
                        <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                            <span className={style['brand-text']}>
                                {brandName}
                            </span>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={'justify-content-end'}>
                        <Nav onSelect={(selectedKey) => navigate(selectedKey)}>
                            {navItems.branded_header.map((item) => (
                                <Nav.Link
                                    key={item.title}
                                    href={item.eventKey}
                                >
                                    {item.title}
                                </Nav.Link>
                            ))}
                            {breakpoint_flag &&
                                navItems.top_header.map((item) => (
                                    <Nav.Link
                                        key={item.title}
                                        href={item.eventKey}
                                    >
                                        {item.title}
                                    </Nav.Link>
                                ))}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

BrandedNavbar.propTypes = {
    brandName: PropTypes.string,
    brandHref: PropTypes.string,
    navItems: PropTypes.shape({
        top_header: PropTypes.arrayOf(
            PropTypes.shape({
                eventKey: PropTypes.string,
                title: PropTypes.string,
            }),
        ),
        branded_header: PropTypes.arrayOf(
            PropTypes.shape({
                eventKey: PropTypes.string,
                title: PropTypes.string,
            }),
        ),
    }),
};

export { BrandedNavbar };
