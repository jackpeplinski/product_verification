import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import AuthenticatedPage from './pages/AuthenticatedPage';
import ErrorPage from './pages/ErrorPage';
import Wrapper from './pages/Wrapper';
import Loading from './pages/Loading';

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path='/' element={<Loading />} />
            <Route path='/authenicated' element={<AuthenticatedPage />} />
            <Route path='/error' element={<ErrorPage />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
