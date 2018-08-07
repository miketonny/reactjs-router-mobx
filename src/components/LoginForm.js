import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, Link } from 'react-router-dom';
import {
 Grid, FormControl, TextField, Button, FormControlLabel, Checkbox
} from '@material-ui/core';
import PropTypes from 'prop-types';

@inject(stores => ({ ui: stores.rootStore.ui }))
@observer
class LoginForm extends Component {
    constructor(props) {
        super(props);
        const { ui, history } = this.props;
        this.uiStore = ui;
        this.history = history;
    }

    handleEmailChange = (e) => {
        this.uiStore.user.email = e.target.value;
    }

    handlePasswordChange = (e) => {
        this.uiStore.user.password = e.target.value;
    }

    handleLogin = () => {
        if (this.uiStore.login()) {
            this.history.push('/teamsummary');
        }
    }

    handleChecked = () => {
        this.uiStore.rememberMeToggle();
    }

    render() {
        return (
          <Grid item>
            <img alt="vx logo" width="300" height="40" src="/images/CloudLogo.png" />
            <h3>Login</h3>
            <FormControl>
              <TextField id="email" placeholder="email" required value={this.uiStore.user.email} onChange={this.handleEmailChange} />
              <TextField id="password" placeholder="password" required value={this.uiStore.user.password} onChange={this.handlePasswordChange} />
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={this.uiStore.rememberMe}
                    onChange={this.handleChecked}
                    color="primary"
                  />
                )}
                label="Remember me?"
              />
              <Button onClick={this.handleLogin}>Sign in</Button>
              <Link to="/forgotpassword">
                <span>Forgotten your password?</span>
              </Link>
              { this.uiStore.failedLogin ? <span>Invalid Login Attempt</span> : null }
            </FormControl>
          </Grid>
);
    }
}

// with mobx inject, base component is wrapped with store injected, use wrappedcomp
LoginForm.wrappedComponent.propTypes = {
    ui: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types,
    history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types,
  };

export default withRouter(LoginForm);
