import React from 'react';
import { Container } from 'react-bootstrap';
import { CustomNavbar } from 'shared/ui/navbar';
import { navItems } from '../vars';

const TopHeader = () => {
    return (
        <Container>
            <CustomNavbar navs={navItems} />
        </Container>
    );
};

export { TopHeader };
