import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/common/Header';
import Home from './Components/home/Home';
import CoinDetails from './Components/coins/CoinDetails';
import NotFound from './Components/NotFound'

function Routes() {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: '80px' }}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/coins/:id" component={CoinDetails} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes;
