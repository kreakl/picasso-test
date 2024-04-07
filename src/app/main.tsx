import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import '../index.css';
import { appStore } from '@/app/redux/app-store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <CssBaseline />
    </ReduxProvider>
  </React.StrictMode>,
);
