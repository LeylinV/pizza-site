import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGithubSquare, FaTelegram } from 'react-icons/fa';
import { FaSquareGitlab } from 'react-icons/fa6';

const DeveloperCard = ({ developer }) => {
    return (
        <Col
            className={
                'd-flex flex-column justify-content-between col-12 col-sm-4'
            }
        >
            <Row className={'text-center'}>
                <h5>{developer.name}</h5>
                <p className={'mb-0 fw-light'}>{developer.position}</p>
            </Row>
            <Row className={'justify-content-center fs-2'}>
                <Col xs="auto">
                    <a
                        className="link-light"
                        href={developer.urls.gitHub}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                </Col>
                <Col xs="auto">
                    <a
                        className="link-light"
                        href={developer.urls.tg}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTelegram />
                    </a>
                </Col>
                <Col xs="auto">
                    <a
                        className="link-light"
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
