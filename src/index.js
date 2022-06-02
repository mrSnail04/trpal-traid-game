import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";

import './index.css';

import App from './App';
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))
