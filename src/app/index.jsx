// eslint-disable-next-line @conarti/feature-sliced/public-api
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import './index.scss';

function App() {
    return <RouterProvider router={router} />;
}

export default App;
