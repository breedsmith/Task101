import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { QuestionProvider } from './context/question.context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserProvider>
  <QuestionProvider>
    <App />
  </QuestionProvider>
  </UserProvider>
  </BrowserRouter>
);

