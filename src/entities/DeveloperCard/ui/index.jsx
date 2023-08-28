import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGithubSquare, FaTelegram } from 'react-icons/fa';
import { FaSquareGitlab } from 'react-icons/fa6';

const DeveloperCard = ({ developer }) => {
    return (
        <Col className={'text-center col-12 col-sm-4'}>
            <p className={'mb-0'}>{developer.position}</p>
            <h5>{developer.name}</h5>
            <Row className={'justify-content-center fs-2'}>
                <Col xs="auto">
                    <a
                        className="text-white"
                        href={developer.urls.gitHub}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                </Col>
                <Col xs="auto">
                    <a
                        className="text-white"
                        href={developer.urls.tg}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTelegram />
                    </a>
                </Col>
                <Col xs="auto">
                    <a
                        className="text-white"
                        href={developer.urls.gitLab}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaSquareGitlab />
                    </a>
                </Col>
            </Row>
        </Col>
    );
};

DeveloperCard.propTypes = {
    developer: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
        urls: PropTypes.shape({
            gitHub: PropTypes.string,
            tg: PropTypes.string,
            gitLab: PropTypes.string,
        }),
    }),
};

export { DeveloperCard };
