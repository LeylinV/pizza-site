import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import App from 'app';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);

reportWebVitals();
