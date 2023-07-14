import React from 'react';
import {Nav} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {isAvialable} from "../../utils/isAvialable";


const CustomNavbar = ({navs}) => {
    const navigate = useNavigate()

    if (!(isAvialable(navs))){
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