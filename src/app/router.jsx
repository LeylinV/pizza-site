import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { NotFoundPage } from 'pages/not-found-page';
import { StorePage } from 'pages/StorePage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Layout />}
        >
            <Route
                index
                element={<StorePage />}
            />
            <Route
                path="*"
                element={<NotFoundPage />}
            />
        </Route>,
    ),
);

export default router;
