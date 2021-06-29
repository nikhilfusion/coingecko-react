import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import { useHistory } from 'react-router';
import NotFoundImage from '../assets/not_found.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto'
  }
}));

function NotFound() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg">
      <Typography
        align="center"
        variant={mobileDevice ? 'h4' : 'h1'}
        color="textPrimary"
        data-testid="title"
      >
        404: The page you are looking for isn’t here
      </Typography>
      <Typography
        align="center"
        variant="subtitle2"
        color="textSecondary"
      >
        You either tried some shady route or you
        came here by mistake. Whichever it is, try using the navigation.
      </Typography>
      <Box
        mt={6}
        display="flex"
        justifyContent="center"
      >
        <img
          alt="Under development"
          className={classes.image}
          src={NotFoundImage}
        />
      </Box>
      <Box
        mt={6}
        display="flex"
        justifyContent="center"
      >
        <Button
          color="secondary"
          onClick={() => history.push('/')}
          variant="outlined"
        >
          Back to home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
