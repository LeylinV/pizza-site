import PropTypes from 'prop-types';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { isAvailable } from '../../lib/isAvailable';

const CustomNavbar = ({ navs }) => {
    const navigate = useNavigate();

    if (!isAvailable(navs)) {
        return <></>;
    }
    return (
        <Nav onSelect={(selectedKey) => navigate(selectedKey)}>
            {navs?.map((nav) => (
                <Nav.Item key={nav.eventKey}>
                    <Nav.Link href={nav.eventKey}>{nav.title}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
};

CustomNavbar.propTypes = {
    navs: PropTypes.arrayOf(
        PropTypes.shape({
            eventKey: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
};

export { CustomNavbar };
