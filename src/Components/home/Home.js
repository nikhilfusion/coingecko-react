import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Grid,
  Container
} from '@material-ui/core';
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";

import Loading from '../../assets/loading.gif';
import Cards from './Cards';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },

}));

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Home() {
  const classes = useStyles();
  const perPage = 10;
  const [pageNumber, setPageNumber] = useState(1);
  const [marketData, setMarketData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getMarketRate(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getFetchURL(pageNum) {
    return `${BASE_URL}/coins/markets?vs_currency=eur&per_page=${perPage}&page=${pageNum}`;
  }

  async function getMarketRate(pageNum) {
    try {
      const result = await axios.get(getFetchURL(pageNum))
      console.log("result is ", result);
      const processedData = [...marketData, ...result?.data];
      setPageNumber(pageNum);
      setMarketData(processedData);
    } catch (err) {
      console.log("something went wrong ", err);
    }
  }

  const handleCardClick = (userId) => history.push(`/coins/${userId}`);

  return (
    <InfiniteScroll
      next={() => getMarketRate(pageNumber + 1)}
      hasMore={true}
      dataLength={marketData.length}
      loader={<img src={Loading} alt="loading" />}
    >
      <Container className={classes.cardMain} maxWidth="lg">
        <Grid container spacing={4}>
          {marketData.map((marketDt) => (
            <Grid item key={marketDt.id} xs={12} sm={6} md={4}>
              <Cards cardData={marketDt} onCardClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </InfiniteScroll>
  )
}
