import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ children, ...props }) => {
    return (
        <Button
            variant="primary"
            {...props}
        >
            {children}
        </Button>
    );
};

CustomButton.propTypes = {
    children: PropTypes.node,
};

export { CustomButton };
