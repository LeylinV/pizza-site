import React from 'react';
import {Row, Col} from "react-bootstrap";
import {FaGithubSquare, FaTelegram} from 'react-icons/fa'
import {FaSquareGitlab} from "react-icons/fa6";

const DeveloperCard = ({developer}) => {
    return (
        <Col className={'text-center col-12 col-sm-4'}>
            <p className={'mb-0'}>{developer.position}</p>
            <h5>{developer.name}</h5>
            <Row className={'justify-content-md-center fs-2'}>
                <Col xs='auto'><a className='text-white' href={developer.urls.gitHub}><FaGithubSquare /></a></Col>
                <Col xs='auto'><a className='text-white' href={developer.urls.tg}><FaTelegram /></a></Col>
                <Col xs='auto'><a className='text-white' href={developer.urls.gitLab}><FaSquareGitlab /></a></Col>
            </Row>
        </Col>
    );
};

export {DeveloperCard};