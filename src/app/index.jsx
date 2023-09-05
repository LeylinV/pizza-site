// eslint-disable-next-line @conarti/feature-sliced/public-api
import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router';

import './index.scss';

function App() {
    return (
        <Suspense fallback="">
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
