import React, { Component } from 'react';
import Login from '../pages/Login';
import Evaluation from '../pages/Evaluation';
import NavBar from '../components/NavBar';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path='/' exact component={Login} />
        <Route path='/evaluation' component={Evaluation} />
      </div>
    );
  }
}

export default Home;
