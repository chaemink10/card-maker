import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageService from './service/fileupload';

const authService = new AuthService();
const imageService = new ImageService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} imageService={imageService} />
  </React.StrictMode>,
  document.getElementById('root')
);
