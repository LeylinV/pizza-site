import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <main className="d-flex align-items-center justify-content-center flex-grow-1">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3">
                    {' '}
                    <span className="text-danger">Упсс!</span> Страница не
                    найдена.
                </p>
                <p className="lead">Страница, которую вы ищете, не найдена.</p>
                <Link
                    to={'/'}
                    className="btn btn-primary"
                >
                    На главную
                </Link>
            </div>
        </main>
    );
};

export { NotFoundPage };
