import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { themeVariables } from './styles/Theme'
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Gradient from './components/gradient/Gradient';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeVariables}>
      <GlobalStyles />
      <Gradient />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
