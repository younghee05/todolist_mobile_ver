import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // RecoilRoot -> component와 연결하기 위한 
    <RecoilRoot> 
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </RecoilRoot>
);

reportWebVitals();
