import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Grid, FormControl, Button
} from '@material-ui/core';

class Success extends Component {
    handleLogin = () => {
        const { history } = this.props;
        history.push('/');
    }

    render() {
        return (
          <Grid id="success" container alignItems="center" justify="center">
            <Grid item>
              <img alt="vx logo" width="300" height="40" src="/images/CloudLogo.png" />
              <h3>Reset Password</h3>
              <FormControl>
                <p>Email sent successfully!</p>
                <Button onClick={this.handleLogin}>Login</Button>
              </FormControl>
            </Grid>
          </Grid>
        );
    }
}

// with mobx inject, base component is wrapped with store injected, use wrappedcomp
Success.propTypes = {
    history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Success;
