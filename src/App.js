import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Summary from './components/Summary';
import Wellness from './components/Wellness';
import './App.scss';
import Login from './components/Login';


@inject('rootStore')
@observer
class App extends Component {
    componentDidMount() {

    }

    render() {
      return (
        <Router basename="/">
          <div className="App" data-test="component-app">
            <Route exact path="/" component={Login} />
            <Route exact path="/teamsummary" component={Summary} />
            <Route exact path="/wellness" component={Wellness} />
          </div>
        </Router>
      );
  }
}

export default hot(module)(App);
