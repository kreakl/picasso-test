import { createBrowserRouter } from 'react-router-dom';
import { Button } from '@mui/material';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Button sx={{ paddingTop: '10px' }}>Click</Button>
  },
]);
