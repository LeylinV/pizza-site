import React from 'react';
import {Button} from "react-bootstrap";

const CustomButton = ({children, ...props}) => {
    return (
        <Button variant="primary" {...props}>{children}</Button>
    );
};

export default CustomButton;