import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Checkmark from './components/Checkmark';
import Page from './components/Page';
import Wrapper from './components/Wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
      <Page />
      {/* <Checkmark /> */}
    </Wrapper>
  </React.StrictMode>
);
