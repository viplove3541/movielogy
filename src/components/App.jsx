import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInfo, Movies, NavBar, Profile } from './';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path='/movie/:id' element={<MovieInfo />} />

          <Route exact path='/actors/:id' element={<Actors />} />

          <Route exact path='/' element={<Movies />} />

          <Route exact path='/approved' element={<Movies />} />

          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
