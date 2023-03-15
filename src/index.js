import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="959854331354-telh3suplfm57nlldk6r9u4stpj3chq5.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter basename="">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);