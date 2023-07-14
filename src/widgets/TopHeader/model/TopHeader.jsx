import React from 'react';
import {Container, Nav} from "react-bootstrap";
import {navItems} from "../vars";
import Navbar from "../../../shared/ui/navbar/Navbar";

const TopHeader = () => {
    return (
        <Container>
            <Navbar navs={navItems}/>
        </Container>
    );
};

export default TopHeader;