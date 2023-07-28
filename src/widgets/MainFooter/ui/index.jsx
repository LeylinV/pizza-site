import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {FaGithubSquare, FaTelegram} from 'react-icons/fa'
import {FaSquareGitlab} from "react-icons/fa6";


const MainFooter = () => {
    return (
        <div className={'bg-dark text-white'}>
            <Container>
                <h4 className={'mt-4 mb-3 text-center'}>Наша команда</h4>
                <Row>
                    <Col className={'text-center'}>
                        <p className={'mb-0'}>Главный Frontend-разработчик</p>
                        <h5>LeylinV</h5>
                        <Row className={'justify-content-md-center fs-2'}>
                            <Col xs='auto'><a><FaGithubSquare /></a></Col>
                            <Col xs='auto'><a><FaTelegram /></a></Col>
                            <Col xs='auto'><a><FaSquareGitlab /></a></Col>
                        </Row>
                    </Col>
                    <Col className={'text-center'}>
                        <p className={'mb-0'}>Главный Backend-разработчик</p>
                        <h5>kurasikirwa</h5>
                        <Row className={'justify-content-md-center fs-2'}>
                            <Col xs='auto'><a><FaGithubSquare /></a></Col>
                            <Col xs='auto'><a><FaTelegram /></a></Col>
                            <Col xs='auto'><a><FaSquareGitlab /></a></Col>
                        </Row>
                    </Col>
                    <Col className={'text-center'}>
                        <p className={'mb-0'}>FullStack-разработчик</p>
                        <h5>unktir</h5>
                        <Row className={'justify-content-md-center fs-2'}>
                            <Col xs='auto'><a><FaGithubSquare /></a></Col>
                            <Col xs='auto'><a><FaTelegram /></a></Col>
                            <Col xs='auto'><a><FaSquareGitlab /></a></Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <h5 className={'text-center pb-2'}>2023</h5>
            </Container>
        </div>
    );
};

export {MainFooter};