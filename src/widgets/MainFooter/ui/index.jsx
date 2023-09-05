import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { DeveloperCard } from 'entities/DeveloperCard';
import { developers } from '../vars';

const MainFooter = () => {
    return (
        <footer className={'text-bg-dark'}>
            <Container className={'py-3'}>
                <h4 className={'mb-0 text-center'}>Наша команда</h4>
                <Row className={'mt-3 row-gap-4'}>
                    {developers.map((developer) => (
                        <DeveloperCard
                            developer={developer}
                            key={developer.name}
                        />
                    ))}
                </Row>
                <hr />
                <h5 className={'text-center mb-0'}>2023</h5>
            </Container>
        </footer>
    );
};

export { MainFooter };
