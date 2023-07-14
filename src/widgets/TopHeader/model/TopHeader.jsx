import React from 'react';
import {Container} from "react-bootstrap";
import {navItems} from "../vars";
import CustomNavbar from "../../../shared/ui/navbar/CustomNavbar";

const TopHeader = () => {
    return (
        <Container>
            <CustomNavbar navs={navItems}/>
        </Container>
    );
};

export default TopHeader;