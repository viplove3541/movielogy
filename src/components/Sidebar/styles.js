import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '6% 0',
  },
  image: {
    width: '100%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImages: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  },
  bigText: {
    color: 'primary',
    fontSize: 30,
  },
}));