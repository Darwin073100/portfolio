import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Information } from './pages/Information';
import { NavBarDesktop } from './components/NavBarDesktop';
import { Header } from './containers/Header';
import { NavBarMovile } from './components/NavBarMovile';
import './styles/App.css';
import { Main } from './containers/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <NavBarDesktop />
          <NavBarMovile />
        </Header>
        <Main>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/projects' element={ <Projects />} />
            <Route path='/information' element={ <Information /> } />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  )
}

export { App };
