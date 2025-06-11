import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';


const theme = createTheme({
  typography: {
    fontFamily: '"Pixelify Sans", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Estilo base para todos os botões
          fontWeight: 'bold',
        },
        outlined: {
          backgroundColor: '#990000',
          color: '#fff',
          border: '2px solid #990000',
          '&:hover': {
            backgroundColor: '#b22222',
            borderColor: '#b22222',
            color: '#fff',
          },
        },
        text: {
          color: '#990000',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'rgba(153,0,0,0.08)',
            color: '#b22222',
          },
        },
        contained: {
          backgroundColor: '#990000',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#b22222',
            color: '#fff',
          },
        },

      },
    },
    // ...seus estilos de botão...
    MuiOutlinedInput: {
      styleOverrides: {
        root: {

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#990000 !important',
            borderWidth: 2,
          },
          '&.Mui-focused .MuiInputBase-input::placeholder': {
            color: '#990000 !important',
            opacity: 1, // garante que o placeholder fique visível
          },
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
