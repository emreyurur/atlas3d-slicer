import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performans ölçümü için; sonuçları loglamak için bir fonksiyon geçebilir veya bir analiz uç noktasına gönderebilirsiniz.
reportWebVitals();
