import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('rootStore')
@observer
class Login extends Component {
    render() {
        const { history, rootStore } = this.props;
        if (rootStore.ui.user.token === '') return <div>Login Page</div>;
        history.push('/teamsummary');
        return null;
    }
}

export default Login;
