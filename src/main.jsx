import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// 역할: HTML 파일에<div id="root">라는 빈 공간을 찾아가서, 
//      "여기서부터 리액트 세상을 시작하겠다!"라고 선언하는 곳입니다.

// 리액트 엔진을 켜고, 브라우저 주소창(BrowserRouter)과 내 앱을 연결하는 가장 바깥쪽 문

// main.jsx: "리액트 시작! 라우터(주소창) 연결해!