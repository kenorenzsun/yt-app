import React from "react";
import ReactDOM from "react-dom/client";

import "semantic-ui-css/semantic.min.css";

import App from './components/App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)

root.render(
    <App/>
);