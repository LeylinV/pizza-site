import React from 'react';
import { Container } from 'react-bootstrap';
import useBreakpoint from 'shared/lib/useBreakpoint.js';
import { CustomNavbar } from 'shared/ui/navbar';
import { navItems } from '../vars';

const TopHeader = () => {
    const breakpoint = useBreakpoint();
    if (breakpoint !== 'lg' && breakpoint !== 'xl' && breakpoint !== 'xxl') {
        return null;
    }

    return (
        <header className={'border-bottom py-1'}>
            <Container>
                <CustomNavbar navs={navItems} />
            </Container>
        </header>
    );
};

export { TopHeader };
