import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import Checkmark from './pages/Checkmark';
import Page from './pages/Page';
import Wrapper from './pages/Wrapper';
import Loading from './pages/Loading';

function App() {
  // home page is the default for unauthenticated user
  // place a button on the top right for users to login/register

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path='/' element={<Loading />} />
            <Route path='/display' element={<Page />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
