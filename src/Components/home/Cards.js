import React from 'react';
import {
  Grid,
  makeStyles,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { capitalizeName } from '../../utils/common';
// import { capitalizeName } from '../../utils/common';
// import Activity from '../common/Activity';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  },
  cardMedia: {
    height: '250px',
    width: '250px',
    margin: 'auto'
  },
  cardContent: {
    flexGrow: 1,
  },
  contentMain: {
    alignItems: 'center'
  },
  contentHeading: {
    padding: '16px 0',
    fontWeight: 'bold'
  },
  contentValue: {
    padding: '16px 0'
  },
}));

export default function Cards({ cardData, onCardClick }) {
  const classes = useStyles();
  const { image, name, id, symbol, current_price, high_24h, low_24h } = cardData;
  return (
    <Card className={classes.card} onClick={() => onCardClick(id)}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={name}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {capitalizeName(name)}
        </Typography>
        <Grid container className={classes.contentMain}>
          <Grid item xs={8} className={classes.contentHeading}>Symbol</Grid>
          <Grid item xs={4} className={classes.contentValue}>{symbol}</Grid>
          <Grid item xs={8} className={classes.contentHeading}>Current Price</Grid>
          <Grid item xs={4} className={classes.contentValue}>{current_price}</Grid>
          <Grid item xs={8} className={classes.contentHeading}>Lowest 24hr Price</Grid>
          <Grid item xs={4} className={classes.contentValue}>{low_24h}</Grid>
          <Grid item xs={8} className={classes.contentHeading}>Highest 24hr Price</Grid>
          <Grid item xs={4} className={classes.contentValue}>{high_24h}</Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

Cards.propTypes = {
  cardData: PropTypes.object,
  onCardClick: PropTypes.func
}