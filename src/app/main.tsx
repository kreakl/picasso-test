import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { appStore } from '@/app/redux/app-store';
import { router } from '@/app/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ReduxProvider store={appStore}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ReduxProvider>
  </React.StrictMode>,
);
