import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ToggleMenuProvider } from './contexts/toggle-menu.context';
import App from './App';
import './index.css';
import ErrorBoundary from './components/error/ErrorBoundary';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ErrorBoundary>
      <ToggleMenuProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ToggleMenuProvider>
    </ErrorBoundary>
  </StrictMode>
);
