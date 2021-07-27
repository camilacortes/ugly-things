import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextProvider} from './ContextProvider.js'

ReactDOM.render(
  <div>
    <ContextProvider>
      <App/>
    </ContextProvider>
        
  </div>,
  document.getElementById('root')
);


