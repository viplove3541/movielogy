import React, { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { useSelector, useDispatch } from 'react-redux';

const categories = [
  { lable: 'Popular', value: 'popular' },
  { lable: 'Top Rated', value: 'top_rated' },
  { lable: 'Upcoming', value: 'upcoming' },
];

// const demoCategories = [
//   { lable: 'Comedy', value: 'comedy' },
//   { lable: 'Action', value: 'action' },
//   { lable: 'Horror', value: 'horror' },
//   { lable: 'Animation', value: 'animation' },
// ];

const redLogo =
  'https://fontmeme.com/permalink/230525/3d1c459fadb88e8a666a57b9d8819e08.png';
const blueLogo =
  'https://fontmeme.com/permalink/230525/4894c8f624bfc5f73bafc208eb66c899.png';

const SideBar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const classes = useStyles();
  const theme = useTheme();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  return (
    <>
      <Link to='/' className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt='MovieLogy'
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ lable, value }) => (
          <Link key={value} className={classes.links} to='/'>
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemIcon>
                <img
                  alt='categoriesIcon'
                  src={genreIcons[lable.toLowerCase()]}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={lable} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display='flex' justifyContent='center'>
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to='/'>
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(id))}
                button
              >
                <ListItemIcon>
                  <img
                    alt='genreIcon'
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default SideBar;
