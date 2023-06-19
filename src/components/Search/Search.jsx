import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    console.log('here', query);
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant='standard'
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
