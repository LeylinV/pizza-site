import React from 'react';
import { Layout } from 'pages/Layout';
import { NotFoundPage } from 'pages/not-found-page';
import { StorePage } from 'pages/StorePage';

const routeConfig = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <StorePage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
];

export { routeConfig };
