import React from 'react';
import {Nav} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const CustomNavbar = ({navs}) => {
    const navigate = useNavigate()

    if (navs.length === 0){
        return <></>
    }
    return (

        <Nav
            onSelect={(selectedKey) => navigate(selectedKey)}
        >
            {navs.map(nav =>
                <Nav.Item key={nav.eventKey}>
                    <Nav.Link eventKey={nav.eventKey}>{nav.title}</Nav.Link>
                </Nav.Item>
            )}
        </Nav>
    );
};

export default CustomNavbar;