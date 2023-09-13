import React from 'react';
import { BrandedNavbar } from 'shared/ui/branded-navbar';
import { brandName, brandHref, navItems } from '../vars';

const BrandedHeader = () => {
    return (
        <BrandedNavbar
            brandName={brandName}
            brandHref={brandHref}
            navItems={navItems}
        />
    );
};

export { BrandedHeader };
