import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';


@inject('rootStore')
@observer
class Login extends Component {
    render() {
        const { rootStore } = this.props;
        if (!rootStore.ui.loginStatus()) return <div>Login Page</div>;
        return <Redirect to="/teamsummary" />; // logged in user go direct to team summary
    }
}

export default Login;
