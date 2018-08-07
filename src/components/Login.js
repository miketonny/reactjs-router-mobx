import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import LoginForm from './LoginForm';


@inject('rootStore')
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        const { rootStore } = this.props;
        this.ui = rootStore.ui;
    }

    render() {
        const { rootStore } = this.props;
        if (rootStore.ui.loginStatus()) return <Redirect to="/teamsummary" />; // logged in user go direct to team summary
        return (
          <Grid id="login" container alignItems="center" justify="center">
            <LoginForm />
          </Grid>
        );
    }
}

// with mobx inject, base component is wrapped with store injected, use wrappedcomp
Login.wrappedComponent.propTypes = {
    rootStore: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Login;
