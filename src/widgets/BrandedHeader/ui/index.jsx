import {BrandedNavbar} from "shared/ui/branded-navbar";

import {brandName, brandHref} from "../vars";

const BrandedHeader = () => {
    return (
        <BrandedNavbar
            brandName={brandName}
            brandHref={brandHref}
        />
    );
};

export {BrandedHeader};