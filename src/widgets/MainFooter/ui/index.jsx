import React from 'react';
import {Container, Row} from "react-bootstrap";
import { developers } from '../vars';
import { DeveloperCard } from 'entities/DeveloperCard';

const MainFooter = () => {
    return (
        <div className={'bg-dark text-white'}>
            <Container>
                <h4 className={'mt-4 mb-3 text-center'}>Наша команда</h4>
                <Row>
                    {developers.map((developer) => <DeveloperCard developer={developer} key={developer.name} /> 
                    )}
                </Row>
                <hr />
                <h5 className={'text-center pb-2'}>2023</h5>
            </Container>
        </div>
    );
};

export {MainFooter};