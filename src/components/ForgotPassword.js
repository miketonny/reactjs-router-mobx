import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import {
    Grid, FormControl, TextField, Button
} from '@material-ui/core';


@inject('rootStore')
@observer
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        const { rootStore, history } = this.props;
        this.ui = rootStore.ui;
        this.history = history;
    }

    handlePWReset = () => {
        // send reset email...
        this.history.push('/success');
    }

    render() {
        return (
          <Grid id="forget-pw" container alignItems="center" justify="center">
            <Grid item>
              <img alt="vx logo" width="300" height="40" src="/images/CloudLogo.png" />
              <h3>Reset Password</h3>
              <FormControl>
                <TextField id="email" placeholder="email" required />
                <Button onClick={this.handlePWReset}>Reset</Button>
              </FormControl>
            </Grid>
          </Grid>
        );
    }
}

// with mobx inject, base component is wrapped with store injected, use wrappedcomp
ForgotPassword.wrappedComponent.propTypes = {
    rootStore: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default ForgotPassword;
