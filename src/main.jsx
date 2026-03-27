import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'

const basename = import.meta.env.MODE === 'development' ? '/' : '/todayhouse';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);