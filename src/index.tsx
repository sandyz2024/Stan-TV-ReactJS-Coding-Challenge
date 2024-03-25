import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import './App.css';

  const Application = () => (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<Application />);
