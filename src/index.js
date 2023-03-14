import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';

import App from '@/App';
// import 'antd/dist/reset.css';
import '@/assets/css/index.less';
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    
  </Provider>
);