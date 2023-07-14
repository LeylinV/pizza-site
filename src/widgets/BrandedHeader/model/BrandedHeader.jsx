import React from 'react';
import BrandedNavbar from "../../../shared/ui/branded-navbar/BrandedNavbar";
import {brandName, brandHref} from "../vars";

const BrandedHeader = () => {
    return (
        <BrandedNavbar
            brandName={brandName}
            brandHref={brandHref}
        />
    );
};

export default BrandedHeader;