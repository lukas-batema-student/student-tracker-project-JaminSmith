import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import "./App.css"
import {BrowserRouter} from "react-router-dom"

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>  
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

