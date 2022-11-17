import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import Checkmark from './pages/Checkmark';
import Page from './pages/Page';
import Wrapper from './pages/Wrapper';
import Loading from './pages/Loading';

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path='/' element={<Loading />} />
            <Route path='/authenicated' element={<Page />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
