import {useNavigate} from "react-router-dom";
import {Nav} from "react-bootstrap";

import {isAvailable} from "shared/lib/isAvailable";

const CustomNavbar = ({navs}) => {
    const navigate = useNavigate()

    if (!(isAvailable(navs))) {
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

export {CustomNavbar};