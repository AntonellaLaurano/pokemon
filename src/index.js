import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';

import AppRouter from './routers/AppRouter';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider>
          <AppRouter />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
