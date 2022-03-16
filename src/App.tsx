import React from 'react';
import './App.css';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { TicketsPageAux } from './Views/TicketsPage/TicketsPageAux';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Roboto',
        textTransform: 'none',
      },
    },
  })
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <TicketsPageAux />
      </div>
    </ThemeProvider>
  );
}

export default App;
