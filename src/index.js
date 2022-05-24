import React from 'react';
import App from './App';



import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

