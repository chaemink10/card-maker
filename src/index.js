import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageService from './service/fileupload';
import ImageFileInput from './components/image_file_input/ImageFileInput';
import Database from './service/database';

const authService = new AuthService();
const imageService = new ImageService();
const DBService = new Database();

// 컴포넌트의 Depth가 깊고, 확장성을 고려하여 컴포넌트를 Prop으로 전달.
const FileInput = (props) => (
  <ImageFileInput {...props} imageService={imageService} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      DBService={DBService}
    />
    ;{/* 컴포넌트 프롭 */}
  </React.StrictMode>,
  document.getElementById('root')
);
