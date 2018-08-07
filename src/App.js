import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Summary from './components/Summary';
import Wellness from './components/Wellness';
import TrainingLoad from './components/TrainingLoad';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Success from './components/Success';


@inject('rootStore')
@observer
class App extends Component {
    componentDidMount() {

    }

    render() {
      return (
        <Router basename="/">
          <div className="App" data-test="component-app">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/teamsummary" component={Summary} />
              <Route exact path="/wellness" component={Wellness} />
              <Route exact path="/trainingload" component={TrainingLoad} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <Route exact path="/success" component={Success} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
  }
}

export default hot(module)(App);
