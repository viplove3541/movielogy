import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInfo, Movies, NavBar, Profile } from './';
import './styles.css';

const App = () => {
  return (
    <div className='root'>
      <CssBaseline />
      <NavBar />
      <main className='content'>
        <div className='toolbar' />
        <Routes>
          <Route exact path='/movie/:id' element={<MovieInfo />} />

          <Route path='/actors/:id' element={<Actors />} />

          <Route path='/' element={<Movies />} />

          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
