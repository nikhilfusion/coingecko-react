import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Grid,
  makeStyles,
  Button,
  Typography
} from '@material-ui/core';
import { useParams } from 'react-router';
import { capitalizeName } from '../../utils/common';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: '16px 48px'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  subTitle: {
    paddingLeft: '24px',
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
}))

export default function CoinDetails() {
  const { id: coinId } = useParams();
  const classes = useStyles();
  const [coinData, setCoinData] = useState({})
  useEffect(() => {
    getCoinDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // fetching coin details api
  async function getCoinDetails() {
    if (coinId) {
      try {
        const result = await axios.get(`${BASE_URL}/coins/${coinId}`)
        setCoinData(result?.data);
      } catch (err) {
        console.log("err is ", err);
      }
    }
  }

  return (
    <Grid className={classes.mainContainer} container spacing={2} justify="center">
      <Grid item xs={12}>
        <Typography variant="h2" align="center">Coin Details</Typography>
      </Grid>
      <Grid item xs={12} className={classes.titleContainer}>
        <Avatar alt="coin" src={coinData?.image?.small}></Avatar>
        <Typography variant="h4" className={classes.subTitle}>{capitalizeName(coinData?.name)}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {coinData?.description?.en}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Details</Typography>
        <Grid container className={classes.contentMain}>
          <Grid item xs={6} sm={3} className={classes.contentHeading}>Symbol</Grid>
          <Grid item xs={6} sm={9} className={classes.contentValue}>{coinData?.symbol || 'NA'}</Grid>
          <Grid item xs={6} sm={3} className={classes.contentHeading}>Hashing Algorithm</Grid>
          <Grid item xs={6} sm={9} className={classes.contentValue}>{coinData?.hashing_algorithm || 'NA'}</Grid>
          <Grid item xs={6} sm={3} className={classes.contentHeading}>Genesis Date</Grid>
          <Grid item xs={6} sm={9} className={classes.contentValue}>{coinData?.genesis_date || 'NA'}</Grid>
          <Grid item xs={6} sm={3} className={classes.contentHeading}>Market Cap in Euro</Grid>
          <Grid item xs={6} sm={9} className={classes.contentValue}>{coinData?.market_data?.market_cap?.eur || 'NA'}</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" href="/home">Back to Home</Button>
      </Grid>
    </Grid>
  )
}
